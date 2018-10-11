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
                        <div class="exchange-content" v-for="(item,index) in product" :key="item.id" :class="{active:exchangeSideIndex==index}">
                            <div class="change-content-top">
                                <img :src="'https://www.greenfortune.sh.cn/images/'+item.prodPic" alt="">
                            </div>
                            <div class="exchange-content-bottom">
                                <p class="exchange-detail-name">{{item.prodName}}</p>
                                <p class="exchange-detail-count">{{item.prodPoints}}</p>
                                <p class="exchange-detail-address">
                                    <img src="@/assets/icon/position.png" alt="">
                                   {{item.productInfo.prodReceiveAddress}}领取
                                </p>
                                <p class="exchange-detail-time">
                                   {{item.productInfo.prodProvider}}提供
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
import $ from 'jquery';
import api from "@/api/api.js";
export default {
    data(){
        return{
            product:{},
            exchangeSideCount:4,
            exchangeSideIndex:0,
        }
    },
    mounted(){
        this.getProductList()
    },
    methods:{
        exchangeNext(){
            if(this.exchangeSideIndex>(this.exchangeSideCount-2)){
                return;
            }else {
                this.exchangeSideIndex+=1;
                console.log(this.exchangeSideIndex);
                $('.exchange-content').css('transform','translateX(-'+(378.5*this.exchangeSideIndex)+'px)');
            }
        },
        exchangeLast(){
             if(this.exchangeSideIndex<1){
                return;
            }else {
                this.exchangeSideIndex-=1;
                $('.exchange-content').css('transform','translateX(-'+(378.5*this.exchangeSideIndex)+'px)'); 
            }
        },
        getProductList(){
            api.getProductList({
                data:{
                "prodExchBrid":"310000000000",
                },
            }).then(res =>{
                this.exchangeSideCount=res.data.length-1
                this.product = res.data
            })
        }

    }
}
</script>

