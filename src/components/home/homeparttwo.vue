<template>
    <div class="home-active-contain">
        <div class="home-active-puben"></div>
        <div class="home-active-content">
            <div class="part-title">
                <div class="title-left">
                    <p class="title-name">绿账活动</p>
                    <p class="en-title-name">EVENTS GALLERY</p>
                </div>
            </div>
            <div class="part-content">
                <div class="active-content-left">
                    <p class="active-content-title active">
                        <span class="active-line"></span> 积分捐赠
                    </p>
                    <p class="active-content-title">
                        <span class="active-line"></span> 公益志愿    
                    </p>
                </div>
                <div class="active-content-right">
                    <div class="active-content-big-img">
                        <img src="@/assets/heart.png" alt="" class="img-items" :class="{active:activeIndex==0}">
                        <img src="@/assets/activeone.png" alt="" class="img-items" :class="{active:activeIndex==1}">
                        <img src="@/assets/heart.png" alt="" class="img-items" :class="{active:activeIndex==2}">
                    </div>
                    <div class="active-content-des">
                        <div class="active-content-item" :class="{active:activeIndex==0}">
                            <div class="active-content-des-title">
                                <p>为垃圾分拣员献上爱心</p>
                            </div>
                            <div class="active-content-detail">
                                <p>松江区“垃圾分类唤积分，垃圾分类公益行”活动介绍</p>
                                <p>
                                    主办单位： 
                                    <span>松江区绿化和市容管理局&#x3000;</span>
                                    <span>松江区方松街道办事处&#x3000;</span>
                                    <span>松江区益行企业家促进会</span>            
                                </p>
                                <p>
                                    活动时间：2017年12月21日——2018年1月20日
                                </p>
                                <p>
                                    捐分范围：全区各街道绿色账户小区居民家庭
                                </p>
                                <p>
                                    爱心企业：上海依米服饰有限公司
                                </p>
                                <p>
                                    爱心礼包：棉衣330件
                                </p>
                            </div>
                            <div class="active-content-more">
                                <span>点击查看全部</span> 
                                <img src="@/assets/icon/exchangeright.png" alt="" class="more-right-icon">           
                            </div>
                        </div> 
                        <div class="active-content-item" :class="{active:activeIndex==1}">
                            <div class="active-content-des-title">
                                <p>哈哈哈哈哈哈哈</p>
                            </div>
                            <div class="active-content-detail">
                                <p>松江区“垃圾分类唤积分，垃圾分类公益行”活动介绍</p>
                                <p>
                                    主办单位： 
                                    <span>松江区绿化和市容管理局&#x3000;</span>
                                    <span>松江区方松街道办事处&#x3000;</span>
                                    <span>松江区益行企业家促进会</span>            
                                </p>
                                <p>
                                    活动时间：2017年12月21日——2018年1月20日
                                </p>
                                <p>
                                    捐分范围：全区各街道绿色账户小区居民家庭
                                </p>
                                <p>
                                    爱心企业：上海依米服饰有限公司
                                </p>
                                <p>
                                    爱心礼包：棉衣330件
                                </p>
                            </div>
                            <div class="active-content-more">
                                <span>点击查看全部</span> 
                                <img src="@/assets/icon/exchangeright.png" alt="" class="more-right-icon">           
                            </div>
                        </div>
                        <div class="active-content-item" :class="{active:activeIndex==2}">
                            <div class="active-content-des-title">
                                <p>为垃圾分拣员献上爱心</p>
                            </div>
                            <div class="active-content-detail">
                                <p>松江区“垃圾分类唤积分，垃圾分类公益行”活动介绍</p>
                                <p>
                                    主办单位： 
                                    <span>松江区绿化和市容管理局&#x3000;</span>
                                    <span>松江区方松街道办事处&#x3000;</span>
                                    <span>松江区益行企业家促进会</span>            
                                </p>
                                <p>
                                    活动时间：2017年12月21日——2018年1月20日
                                </p>
                                <p>
                                    捐分范围：全区各街道绿色账户小区居民家庭
                                </p>
                                <p>
                                    爱心企业：上海依米服饰有限公司
                                </p>
                                <p>
                                    爱心礼包：棉衣330件
                                </p>
                            </div>
                            <div class="active-content-more">
                                <span>点击查看全部</span> 
                                <img src="@/assets/icon/exchangeright.png" alt="" class="more-right-icon">           
                            </div>
                        </div>
                        
                    </div>
                    <div class="active-maintitle">
                        <div class="white-back">
                            <div>01</div>
                            <div>
                                积分捐赠
                            </div>
                        </div>
                        <div class="tip-icon">新活动</div>
                    </div>
                    <div class="active-content-small-img">
                        <div class="active-content-small-inside">
                            <img src="@/assets/heart.png" alt="" class="small-img-items" :class="{active:activeIndex==0}">
                            <img src="@/assets/activeone.png" alt="" class="small-img-items" :class="{active:activeIndex==1}">
                            <img src="@/assets/heart.png" alt="" class="small-img-items" :class="{active:activeIndex==2}">
                        </div>
                    </div>
                    <div class="active-btn">
                        <div class="active-btn-left" @click="activeChangelast" @mouseenter="leftbtnHover" @mouseleave="activebtnleft=0">
                            <img src="@/assets/icon/doleft.png" alt="" v-show="activeIndex==0||!activebtnleft">
                            <img src="@/assets/icon/activedoleft.png" alt="" v-show="activeIndex!=0&&activebtnleft">
                        </div>
                        <span class="active-btn-line"></span>
                        <div class="active-btn-right" @click="activeChangenext" @mouseenter="rightbtnHover" @mouseleave="activebtnright=0">
                            <img src="@/assets/icon/doright.png" alt="" v-show="activeIndex==activeCount||!activebtnright">
                            <img src="@/assets/icon/activedoright.png" alt="" v-show="activeIndex!=activeCount&&activebtnright">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return {
            activeIndex:0,
            activeCount:2,
            activebtnleft:0,
            activebtnright:0,
            smallactiveIndex:0
        }
    },
    methods:{
        activeChangelast(){
            if(this.activeIndex<=0){
                return 
            }else {
                this.activeIndex-=1;
                if(this.smallactiveIndex<=0){
                    return 
                }else {
                    this.smallactiveIndex-=1;
                    $('.small-img-items').css('transform','translateX(-'+(207*this.smallactiveIndex)+'px)')
                }
                
            }
        },
        activeChangenext(){
            if(this.activeIndex>=this.activeCount){
                return 
            }else {
                this.activeIndex+=1;
                if(this.smallactiveIndex>=this.activeCount){
                    return 
                }else {
                    this.smallactiveIndex+=1;
                    $('.small-img-items').css('transform','translateX(-'+(207*this.smallactiveIndex)+'px)')
                }
            }
        },
        leftbtnHover(){
            this.activebtnleft=1;
            if(this.activeIndex==0){
                $('.small-img-items').css('transform','translateX(0px)')
                return 
            }else{
                this.smallactiveIndex=this.activeIndex-1;
                $('.small-img-items').css('transform','translateX(-'+(207*this.smallactiveIndex)+'px)')
            }
        },
        rightbtnHover(){
            this.activebtnright=1
            if(this.activeIndex==this.activeCount){
                $('.small-img-items').css('transform','translateX(-'+(207*this.activeCount)+'px)')
                return 
            }else {
                console.log('222')
                 this.smallactiveIndex=this.activeIndex+1;
                 $('.small-img-items').css('transform','translateX(-'+(207*this.smallactiveIndex)+'px)')
            }
        }
    },
        
}
</script>

