(function()
{
	// 扩展 全局消息
	$.extend(
	{
		showGlobalMessage: function(message, type, time)
		{
			time = time || 3000;
			var $globalMessage = $('.global-message');
			if($globalMessage.size() > 0 )
			{
				$globalMessage.remove();
			}
			$globalMessage = $('<div class="global-message"><p class="message-text">#text#</p></div>'.replace('#text#', message)).appendTo($('body'));
			$globalMessage.addClass(type);
			$globalMessage.fadeIn(200);

			if(time === -1)
			{
				return;
			}
			setTimeout(function()
			{
				$.hideGlobalMessage();
			}, time);
		},
		hideGlobalMessage: function()
		{
			$('.global-message').fadeOut(200, function()
			{
				$('.global-message').remove();
			});
		}
	});


	// 扩展 mask
	$.extend(
	{
		showMask: function(callback)
		{
			var $mask = $('.mask');
			if($mask.size() === 0)
			{
				$('body').append('<div class="mask"></div>');
				$mask = $('.mask');
			}
			$mask.show();
			(typeof window['callback'] === 'function') && window['callback']();
		},
		hideMask: function(callback)
		{
			$('.mask').remove();
			(typeof window['callback'] === 'function') && window['callback']();
		}
	});

	// 扩展 loading
	$.extend(
	{
		showLoading: function(callback)
		{
			var $loading = $('.loading');
			if($loading.size() === 0)
			{
				$('body').append('<div class="loading"></div>');
				$loading = $('.loading');
			}
			$.showMask();
			$('.mask').css('z-index', 9980);
			$loading.show();
			(typeof window['callback'] === 'function') && window['callback']();
		},
		hideLoading: function(callback)
		{
			$.hideMask();
			$('.loading').hide();
			(typeof window['callback'] === 'function') && window['callback']();
		}
	});

	// tabs
    $(document).delegate('.tabs .navs li a', 'click', function()
    {
        var $this = $(this).closest('li').addClass('active');
        var $nav = $this.closest('.navs');
        var $bd = $nav.next('.panels');
        var _index = $this.index();

        var $panel = $bd.find('.panel').eq(_index).addClass('active');

        $nav.find('li').not($this).removeClass('active');
        $bd.find('.panel').not($panel).removeClass('active');
    });

	// micro tip
    var _microTipTimer = null;
    $.extend(
    {
        microTip : function(options, target)
        {
            $.microAlert(options, target, 'tip')
        }
    });

    // micro confirm
    $.extend(
    {
        microConfirm : function(options, target)
        {
            $.microAlert(options, target, 'confirm')
        }
    });

    // micro alert
    $.extend(
    {
        microAlert : function(options, target, type)
        {
            if(!target)
            {
                return;
            }

            type = type || 'alert';
            var _microTipTmpl = '<div class="micro-tip"><div class="confirm-text">{0}</div></div>';
            var _microAlertTmpl = '<div class="micro-alert"><div class="confirm-text">{0}</div><div class="confirm-buttons"><a href="javascript:;" class="confirm">{1}</a></div></div>';
            var _microConfirmTmpl = '<div class="micro-confirm"><div class="confirm-text">{0}</div><div class="confirm-buttons"><a href="javascript:;" class="confirm">{1}</a><a href="javascript:;" class="cancel">{2}</a></div></div>';
            var _tmpl = null;

            var _remove = function(){$('.micro-tip,.micro-alert,.micro-confirm').remove();};
            _remove();
            clearTimeout(_microTipTimer);

            var defaults = 
            {
                message : '?',
                confirm  : '确定',
                cancel : '取消',
                delay : 1200,
                onConfirm : $.noop,
                onCancel : $.noop
            };

            options = $.extend(defaults, options);
            switch(type)
            {
                case 'confirm' :
                {
                    _tmpl = _microConfirmTmpl.replace('{0}', options.message).replace('{1}', options.confirm).replace('{2}', options.cancel);
                    break;
                }
                case 'alert' :
                {
                    _tmpl = _microAlertTmpl.replace('{0}', options.message).replace('{1}', options.confirm);
                    break;
                }
                case 'tip' :
                {
                    _tmpl = _microTipTmpl.replace('{0}', options.message);

                    _microTipTimer = setTimeout(function()
                    {
                        _remove();
                    }, options.delay)
                    break;
                }
            }
            
            var $microAlert = $(_tmpl).appendTo($('body'));
            var $target = $(target);

            var _css = 
            {
                'top' : $target.offset().top - $microAlert.outerHeight(true) - 8 ,
                'left' : $target.offset().left - $microAlert.outerWidth(true)/2 + $target.outerWidth(true)/2
            };

            $microAlert.css(_css).fadeIn(300);

            $microAlert.find('.confirm').click(function()
            { 
                options.onConfirm(); 
                _remove();
            });
            $microAlert.find('.cancel').click(function()
            { 
                options.onCancel();
                _remove();
            });
        }
    });
    

	// nav
	var _timerSubMenuContainer = null;
	var _timerNavShow = null;
	var _timerNavHide = null;
	$('.hd .navs li a').bind('mouseenter', function()
	{
		clearTimeout(_timerNavHide);
		clearTimeout(_timerSubMenuContainer);

		var $this = $(this);
		var _index = $this.closest('li').index();
		var $navs = $this.closest('.navs');
		$('.sub-menu-container .menu').hide().eq(_index).show().find('li:eq(0)').addClass('hover');
		
		_timerNavShow = setTimeout(function()
		{
			$this.addClass('hover');
			$navs.find('li a').not($this).removeClass('hover');
			$('.sub-menu-container').slideDown('200');
		}, 300);
	});

	$('.hd .navs li a').bind('mouseleave', function()
	{
		var $this = $(this);
		var $navs = $this.closest('.navs');
		clearTimeout(_timerNavShow);
		
		_timerNavHide = setTimeout(function()
		{
			$('.sub-menu-container').slideUp(150, function()
			{
				$('.hd .navs li .hover').removeClass('hover');
			});
		}, 300);
	});

	$('.sub-menu-container').bind('mouseenter', function()
	{
		clearTimeout(_timerNavHide);
		clearTimeout(_timerSubMenuContainer);
	});


	$('.sub-menu-container').bind('mouseleave', function()
	{
		var $this = $(this);
		_timerSubMenuContainer = setTimeout(function()
		{
			$this.slideUp(150, function()
			{
				$('.hd .navs li .hover').removeClass('hover');
			});
		}, 300);
	});

	// sub menu
	$('.sub-menu-container .items li').hover(function()
	{
        $(this).closest('.items').find('li').removeClass('hover');
		$(this).addClass('hover');	
	}, function()
	{
		$(this).removeClass('hover');	
	});

    $('.hd').addClass('fix');

	// index banner
	var $indexBanner = $('body.index .banner');
	if($indexBanner.size() > 0 )
	{
        $('.hd').removeClass('fix');
        
        var bannerSwiper = new Swiper('body.index .banner .swiper-container .items swiper-wrapper .swiper-slide banner1',
        		{
        			autoplay: 5000,
        		    loop: true,
        		    speed: 700,
        		    simulateTouch: false,
        		    autoplayDisableOnInteraction: false,
        		    width:window.innerWidth
        		});
        
		var bannerSwiper = new Swiper('body.index .banner .swiper-container',
		{
			autoplay: 3000,
		    loop: true,
		    speed: 200,
		    simulateTouch: false,
		    autoplayDisableOnInteraction: false,
		    width:window.innerWidth
		});

		$indexBanner.delegate('.prev', 'click', function(e)
		{
			e.preventDefault()
		    bannerSwiper.swipePrev();
		});

		$indexBanner.delegate('.next', 'click', function(e)
		{
			e.preventDefault()
		    bannerSwiper.swipeNext();
		});

		$indexBanner.delegate('.swiper-container', 'mouseenter mouseleave', function(e)
		{
			if(e.type === 'mouseenter')
			{
				bannerSwiper.stopAutoplay();
			}
			else if(e.type === 'mouseleave')
			{
				bannerSwiper.startAutoplay();
			}
		});
	}

	// account banner
	var $accountBanner = $('body.account .banner');
	if($accountBanner.size() > 0 )
	{
        $('.hd').removeClass('fix');

		var accountSwiper = new Swiper('body.account .banner .swiper-container',
		{
			autoplay: 3000,
		    loop: true,
		    speed: 500,
		    simulateTouch: false,
		    pagination: '.swiper-pagination',
        	paginationClickable: true,
        	autoplayDisableOnInteraction: false
		});
	}




})(jQuery);