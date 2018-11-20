<template>
    <div class="home-exchange-contain">
        <div class="home-exchange-content">
            <div class="part-title" :style="exchange_scrolltitle?' opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(100px)'" ref="exchangetitle">
                <div class="title-left">
                    <p class="title-name">礼品兑换</p>
                    <p class="en-title-name">REDEEM GIFT</p>
                </div>
                <div class="title-right">
                    <router-link to="/exchange">
                        <p>
                            <span>点击查看全部</span> 
                            <img src="@/assets/icon/exchangeright.png" alt="" class="title-right-icon">  
                        </p>
                    </router-link>
                </div>
            </div>     
            <div class="part-content">
                <!-- <div class="exchange-content-left partone"  :style="exchange_scrollleft?'opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(200px)'">
                    <div class="exchange-detail">
                        <p class="green-line"></p>
                    </div>
                    <div  class="exchange-detail dec">
                        "绿色账户"携手蚂蚁金服，开通了绿色账户自主申领渠道和线上自由兑换通道。现在居民参与"绿色账户"活动就可以享受消费抵扣、礼品兑换、服务优惠和积分抽奖。
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
                </div> -->
                <div class="exchange-content-right">
                    <div class="exchange-inside-contain" ref="exchangeInside">
                        <router-link :to="'/exchange/detail/?Did='+item.id" v-for="(item,index) in product"
                                     :key="item.id">
                            <div class="exchange-content"  :class="{active:exchangeSideIndex==index}" :style="exchange_scrollitem?'opacity: 1;transform: translateY(0);transition:all 1.5s .'+index*2+'s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .'+index+'s'">
                                <div class="change-content-top">
                                    <img :src="'https://www.greenfortune.sh.cn/images/'+item.prodPic" alt="">
                                </div>
                                <div class="exchange-content-bottom">
                                    <p class="exchange-detail-name">{{item.prodName}}</p>
                                    <p class="exchange-detail-count">{{item.prodPoints}}积分</p>
                                    <p class="exchange-detail-address">
                                        <img src="@/assets/icon/position.png" alt="">
                                        <span>
                                            {{item.productInfo.prodReceiveAddress}}领取
                                        </span>
                                    <!-- {{item.productInfo.prodReceiveAddress}}领取 -->
                                    </p>
                                    <p class="exchange-detail-time">
                                    {{item.productInfo.prodProvider}}提供
                                    </p>
                                </div>
                            </div>
                        </router-link>
                        
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
import $ from 'jquery';
import api from "@/api/api.js";
export default {
    data:function(){
        return{
            product:{},
            exchangeSideCount:0,
            exchangeSideIndex:0,
            exchange_scrolltitle:false,
            exchange_scrollleft:false,
            exchange_scrollitem:false,
        }
    },
    mounted(){
        this.getProductList();
        window.addEventListener('scroll',this.exchangepage)
    },
    destroyed(){
         window.removeEventListener('scroll',this.exchangepage)
    },
    methods:{
        exchangepage(){
            var top=$('.home-exchange-content .part-title').offset().top;
            var client=document.documentElement.clientHeight;
            var scroll=document.documentElement.scrollTop || document.body.scrollTop;
            if(top-client<=scroll){
                this.exchange_scrolltitle=true
            }
            if(top-client+50<=scroll){
                this.exchange_scrollleft=true;
                this.exchange_scrollitem=true
            }
        },
        exchangeNext(){
            if(this.exchangeSideIndex>(this.exchangeSideCount-4)){
                return;
            }else {
                this.exchangeSideIndex+=1;
                $('.exchange-content').css('transition','all .5s')
                $('.exchange-content').css('transform','translateX(-'+(326*this.exchangeSideIndex)+'px)');
            }
        },
        exchangeLast(){
             if(this.exchangeSideIndex<1){
                return;
            }else {
                this.exchangeSideIndex-=1;
                $('.exchange-content').css('transition','all .5s')
                $('.exchange-content').css('transform','translateX(-'+(326*this.exchangeSideIndex)+'px)'); 
            }
        },
        getProductList(){
            api.getProductList({
                data:{
                "prodExchBrid":"310000000000",
                },
            }).then(res =>{
                this.exchangeSideCount=res.data.content.length-1
                this.product = res.data.content
            })
        }

    }
}
</script>

