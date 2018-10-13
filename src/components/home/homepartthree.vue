<template>
    <div class="home-action-contain">
        <div class="home-action-content">
            <div class="part-title">
                <div class="title-left">
                    <p class="title-name">绿账行动</p>
                    <p class="en-title-name">GREEN TOPICS</p>
                </div>
                <div class="title-right">
                    <p class="action-choose">
                        <span class="active">全部</span>
                        <span>绿账行动</span>
                        <span>垃圾分类</span> 
                        <span>惠众绿色</span>
                        <span>中奖名单</span>
                        <span>政策法规</span>
                    </p>
                </div>
            </div>
            <div class="part-content">
                <div class="action-content-left">
                    <div class="action-content-left-top">
                        <img src="@/assets/action.png" alt="">
                    </div>
                    <div class="action-content-left-bottom">
                        <div class="action-left-date">
                            <div class="date-day">{{noticefirst.day}}</div>
                            <div class="date-year">{{noticefirst.littledate}}</div>
                        </div>
                        <div class="action-left-notice">
                            <div class="action-left-title">
                                上海绿色账户平台维护公告
                            </div>
                            <div class="action-left-middle"></div>
                            <div class="action-left-content">
                                <p>亲爱的市民朋友：</p>
                                <div class="notice-contain">
                                    <p class="left-notice-content">您好！为了提供更好的服务，上海</p>
                                    <span @click="displayDetail" class="ellipsis">...</span>  
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
                <div class="action-content-right">
                    <div class="action-list" v-for="(item,index) in noticelist" :key="item.id">
                        <p class="small-content" :class="contentIndex!=index?'':'active'" @mouseenter="contentIndex=index">{{item.title}} <span class="notice-time">{{item.date}}</span> </p>
                        <div class="action-content-right-top" :class="contentIndex==index?'active':''">
                            <div class="action-right-title">
                                上海绿色账户平台维护公告
                            </div>
                            <div class="action-right-notice">
                                <div class="action-right-content">
                                    <p>亲爱的市民朋友：</p>
                                    <div class="notice-contain">
                                        <p class="right-notice-content">您好！为了提供更好的服务，上海绿色账户平台将4月3日晚原来他们竟是这么度过的</p>
                                        <span @click="displayDetail" class="ellipsis">...</span>  
                                    </div>    
                                </div>
                                <div class="right-notice-detail">
                                    <img src="@/assets/icon/activedoright.png" alt="" class="right-notive-btn">
                                    <div class="right-notice-time" >
                                        <div class="date-day">{{item.day}}</div>
                                        <div class="date-year">{{item.littledate}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="action-bottom">
                     <p class="bottom-right">
                        <span>点击查看全部</span> 
                        <img src="@/assets/icon/exchangeright.png" alt="" class="title-right-icon">  
                    </p>
                </div>
            </div>
        </div>   
    </div>
</template>
<script>
import api from "@/api/api.js";
export default {
    data(){
        return {
            contentIndex:null,
            noticelist:[],
            noticefirst:{},
            
        }
    },
    mounted(){
        this.getNewInfoByStyleForUser();
    },
    methods:{
        displayDetail(){

        },
        getNewInfoByStyleForUser(){
            api.getNewInfoByStyleForUser({
                data:{
                    style:"13",
                    startPage:1,
                    pageSize:6
                },
              }  
            ).then(res => {
                console.log(res)
                res.data.newsList.content.forEach((item,index) =>{
                    var date = new Date(item.newsTime)
                    var Y = date.getFullYear() + '-';
                    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                    var D = date.getDate()>10?date.getDate():'0'+date.getDate();
                    item.day= D;
                    item.date=Y+M+D
                    item.littledate=item.date.substring(0,7)
                })
                this.noticefirst=res.data.newsList.content[0];
                this.noticelist = res.data.newsList.content.splice(0,5);
                console.log(this.noticelist)
                // var time = new Date(this.noticefirst.newsTime)
                // this.noticefirst.newsTime=time;
            })
        }
    }
}
</script>

