<template>
  <div class="home-contain">
    <div class="banner-contain">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="banner-img" src="@/assets/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="banner-img" src="@/assets/lvbanner2.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="banner-img" src="@/assets/lvbanner3.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="part-contain">
      <exchange-part></exchange-part>
      <activce-part :scroll="scroll"></activce-part>
      <action-part :scroll="scroll"></action-part>
      <other-part :scroll="scroll"></other-part>
      <rank-part :scroll="scroll"></rank-part>
      <video-part :scroll="scroll"></video-part>
    </div>
    <div class="map-contain">
      <map-part :scroll="scroll"></map-part>
    </div>

    <!-- 右侧边栏 -->
    <div class="floating_ck">
      <div class="quote quoteOne" @mouseenter.stop="codeZfbHover(true)" @mouseleave.stop="codeZfbHover(false)"></div>
      <div class="quote quoteTwo" @mouseenter.stop="codeWxHover(true)" @mouseleave.stop="codeWxHover(false)"></div>
      <div class="quote quoteThree" @click="scrollToTop"></div>
      <div class="codezfb_box" v-show="showzfbma">
        <img src="@/assets/home_zfb_code.png" alt="">
        <div class="text">支付宝扫码领取<br>更多优惠权益</div>
      </div>
      <div class="codewx_box" v-show="showwxma">
        <img src="@/assets/home_wx_code.png" alt="">
        <div class="text">微信扫码关注<br>签到绿豆抽奖</div>
      </div>
    </div>

    <!-- 弹窗 -->

    <div class="int-mask" v-if="homemask">
      <div class="mask-content">
        <p class="mask-icon">
          <img src="@/assets/icon/close.png" alt="" @click="homemaskHandle">
        </p>
        <div class="mask-content-detail">
          <p class="title">重要通知</p>
          <p class="main-content">2016年获取的绿色账户积分将于2018年12月31日逾期清零!</p>
          <p class="small-content">上海绿色账户准备了丰富的礼品供用户兑换，年底前也将开展各式各样的线上线下积分兑换活动。请各位用户密切留意，抓紧兑换哦！</p>
          <p class="detail-button">
            <router-link to="/lvzhanghu/?id=100379&style=13">
              <span>查看详情</span>
            </router-link>
            
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import '@/assets/pages/home.css'
  import $ from 'jquery'
  import api from "@/api/api.js";
  import {mapGetters} from 'vuex'
  import exchangePart from '@/components/home/homepartone.vue'
  import activcePart from '@/components/home/homeparttwo.vue'
  import actionPart from '@/components/home/homepartthree.vue'
  import rankPart from '@/components/home/homepartfour.vue'
  import videoPart from '@/components/home/homepartfive.vue'
  import mapPart from '@/components/home/homepartsix.vue'
  import otherPart from '@/components/home/homepartseven.vue'

  export default {
    components: {
      exchangePart,
      activcePart,
      actionPart,
      rankPart,
      videoPart,
      mapPart,
      otherPart
    },
    data () {
      return {
        scroll: 0,
        showzfbma: false,
        showwxma: false,
        comlist: {
          active: false,
          action: false,
          rank: false,
          video: false,
          map: false,
          other: false
        },
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
           autoplay: {
              delay: 8000, //自动切换的时间间隔，单位ms
              stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
              stopOnLastSlide: true, //如果设置为true，当切换到最后一个slide时停止自动切换。
              disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
              reverseDirection: false, //开启反向自动轮播。
              waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
            },
        },
        lazyload: {
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false
        }
      }
    },
    created () {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.onbeforeunload = function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    },
    computed: mapGetters({
      isArea: "area",
      isusername: "username",
      islogin: "user_islogin",
      homemask:'homemask'
    }),
    mounted () {
      window.addEventListener('scroll', this.page);
      this.bannerList();
    },
    methods: {
      page () {
        this.scroll += 1;
        if (this.scroll == 2) {
          // console.log(document.querySelector('.home-exchange-contain'))
          // document.querySelector('.home-exchange-contain').scrollIntoView()
          // document.documentElement.scrollTop=$('.home-exchange-content').offset().top;
        }
        // document.documentElement.scrollTop=500

        // console.log(document.documentElement.scrollTop)
      },
      bannerList(){
        api.getbannerList({
          "data": {
            prodExchBrid: this.isArea.id

          },
        }).then(res => {
          console.log(res)
        })
      },
      scrollToTop() {
        window.scrollTo(0, 0);
      },
      codeZfbHover(status) {
        this.showzfbma = status;
      },
      codeWxHover(status) {
        this.showwxma = status;
      },
      homemaskHandle(){
        this.$store.dispatch('gethomemask', false);
      }
    }
  }
</script>

