<template>
    <div class="home-exchange-contain">
        <div class="home-exchange-content">
            <div class="part-title">
                <div class="title-left">
                    <p class="title-name">礼品兑换</p>
                    <p class="en-title-name">REDEEM GIFT</p>
                </div>
                <div class="title-right">
                    <p>
                        <span>点击查看全部</span> 
                        <img src="@/assets/icon/exchangeright.png" alt="" class="title-right-icon">  
                    </p>
                </div>
            </div>
            <div class="part-content">
                <div class="exchange-content-left">
                    <div class="exchange-detail">
                        <p class="green-line"></p>
                    </div>
                    <div  class="exchange-detail dec">
                        绿色账户”携手蚂蚁金服，开通了绿色账户自主申领渠道和线上自由兑换通道。现在居民参与“绿色账户”活动就可以享受消费抵扣、礼品兑换、服务优惠和积分抽奖。
                    </div>
                    <div  class="exchange-detail code">
                        <div class="paycode">
                            <img src="@/assets/paycodebig.png" alt="">
                            <p>支付宝扫码领取<br>更多优惠权益</p>
                        </div>
                        <div class="wechatcode">
                            <img src="@/assets/wechatbig.png" alt="">
                            <p>微信扫码关注<br>签到绿豆抽奖</p>
                        </div>
                    </div>
                </div>
                <div class="exchange-content-right">
                    <div class="exchange-inside-contain" ref="exchangeInside">
                        <div class="exchange-content" :class="{active:exchangeSideIndex==0}">
                            <div class="change-content-top">
                                <img src="@/assets/animal.png" alt="">
                            </div>
                            <div class="exchange-content-bottom">
                                <p class="exchange-detail-name">上海XXXXXXXX公园</p>
                                <p class="exchange-detail-count">100分</p>
                                <p class="exchange-detail-address">
                                    <img src="@/assets/icon/position.png" alt="">
                                    XXXX街道小区垃圾分拣员
                                </p>
                                <p class="exchange-detail-time">
                                    活动时间：<span>2017-12-21</span>——<span>2018-01-20</span>
                                </p>
                            </div>
                        </div>
                        <div class="exchange-content" :class="{active:exchangeSideIndex==1}">
                            <div class="change-content-top">
                                <img src="@/assets/animal.png" alt="">
                            </div>
                            <div class="exchange-content-bottom">
                                <p class="exchange-detail-name">上海XXXXXXXX公园</p>
                                <p class="exchange-detail-count">100分</p>
                                <p class="exchange-detail-address">
                                    <img src="@/assets/icon/position.png" alt="">
                                    XXXX街道小区垃圾分拣员
                                </p>
                                <p class="exchange-detail-time">
                                    活动时间：<span>2017-12-21</span>——<span>2018-01-20</span>
                                </p>
                            </div>
                        </div>
                        <div class="exchange-content">
                            <div class="change-content-top">
                                <img src="@/assets/animal.png" alt="">
                            </div>
                            <div class="exchange-content-bottom">
                                <p class="exchange-detail-name">上海XXXXXXXX公园</p>
                                <p class="exchange-detail-count">100分</p>
                                <p class="exchange-detail-address">
                                    <img src="@/assets/icon/position.png" alt="">
                                    XXXX街道小区垃圾分拣员
                                </p>
                                <p class="exchange-detail-time">
                                    活动时间：<span>2017-12-21</span>——<span>2018-01-20</span>
                                </p>
                            </div>
                        </div>
                        <div class="exchange-content">
                            <div class="change-content-top">
                                <img src="@/assets/animal.png" alt="">
                            </div>
                            <div class="exchange-content-bottom">
                                <p class="exchange-detail-name">上海XXXXXXXX公园</p>
                                <p class="exchange-detail-count">100分</p>
                                <p class="exchange-detail-address">
                                    <img src="@/assets/icon/position.png" alt="">
                                    XXXX街道小区垃圾分拣员
                                </p>
                                <p class="exchange-detail-time">
                                    活动时间：<span>2017-12-21</span>——<span>2018-01-20</span>
                                </p>
                            </div>
                        </div>
                        <div class="exchange-content">
                            <div class="change-content-top">
                                <img src="@/assets/animal.png" alt="">
                            </div>
                            <div class="exchange-content-bottom">
                                <p class="exchange-detail-name">上海XXXXXXXX公园</p>
                                <p class="exchange-detail-count">100分</p>
                                <p class="exchange-detail-address">
                                    <img src="@/assets/icon/position.png" alt="">
                                    XXXX街道小区垃圾分拣员
                                </p>
                                <p class="exchange-detail-time">
                                    活动时间：<span>2017-12-21</span>——<span>2018-01-20</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="exchange-content-right-btn">
                    <div class="exchange-left-btn">
                        <img src="@/assets/icon/left.png" alt="" @click="exchangeLast()">
                    </div>
                    <div class="exchange-right-btn">
                        <img src="@/assets/icon/right.png" alt="" @click="exchangeNext()">
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
        return{
            exchangeSideCount:'5',
            exchangeSideIndex:'0',
        }
    },
    mounted(){

    },
    methods:{
        exchangeNext(){
            console.log( $(this.$refs.exchangeInside))  
            if(this.exchangeSideCount==5){
                return;
            }else {
                
            }
            
        },
        exchangeLast(){
             $(this.$refs.exchangeInside).css('transform','translateX(900px)')
        }

    }
}
</script>

