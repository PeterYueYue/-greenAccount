<template>
    <div class="home-action-contain">
        <div class="home-action-content">
            <div class="part-title" :style="action_scrolltitle?' opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(100px)'">
                <div class="title-left">
                    <p class="title-name">绿色专题</p>
                    <p class="en-title-name">GREEN TOPICS</p>
                </div>
                <div class="title-right">
                    <p class="action-choose">
                        <span class="item-title" :class="activeIndex==1?'active':''" @click="allList4NewStyle('13,16,05,18,07',1)">全部</span>
                        <span class="item-title" :class="activeIndex==2?'active':''" @click="allList4NewStyle('13',2)">绿账行动</span>
                        <span class="item-title" :class="activeIndex==3?'active':''" @click="allList4NewStyle('07',3)">垃圾分类</span> 
                        <span class="item-title" :class="activeIndex==4?'active':''" @click="allList4NewStyle('16',4)">惠众绿色</span>
                        <span class="item-title" :class="activeIndex==5?'active':''" @click="allList4NewStyle('18',5)">中奖名单</span>
                        <span class="item-title" :class="activeIndex==6?'active':''" @click="allList4NewStyle('05',6)">政策法规</span>
                    </p>
                </div>
            </div>
            
            <div class="part-content">
                <router-link :to="'/lvzhanghu/?id='+noticefirst.id+'&style='+noticefirst.newsStyle">
                    <div class="action-content-left partone" :style="action_left?'opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(200px)'">
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
                                    {{noticefirst.title}}
                                </div>
                                <div class="action-left-middle"></div>
                                <div class="action-left-content">
                                    <!-- <p>亲爱的市民朋友：</p> -->
                                    <div class="notice-contain">
                                        <p class="left-notice-content">{{noticefirst.newsContent}}</p>
                                        <!-- <span  class="ellipsis">...</span>   -->
                                    </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                
                <div class="action-content-right">                  
                    <div class="action-list"  v-for="(item,index) in noticelist" :class="contentIndex==index?'active':''" :key="item.id" :style="action_list?'opacity: 1;transform: translateY(0);transition:all 1.5s .'+index+'s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .'+index+'s'">
                        <p class="small-content" :class="contentIndex!=index?'':'active'" @mouseenter="contentIndex=index">{{item.title}} <span class="notice-time">{{item.date}}</span> </p>
                        <router-link :to="'/lvzhanghu/?id='+item.id+'&style='+item.newsStyle">
                            <div class="action-content-right-top" :class="contentIndex==index?'active':''">
                                <div class="action-right-title">
                                   {{item.title}}
                                </div>
                                <div class="action-right-notice">
                                    <div class="action-right-content">
                                        <!-- <p>亲爱的市民朋友：</p> -->
                                        <div class="notice-contain">
                                            <p class="right-notice-content">{{item.newsContent}}</p>
                                            <!-- <span class="ellipsis">...</span>   -->
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
                        </router-link>          
                    </div>
                </div>
                <div class="action-bottom partone" :style="action_scrollbottom?'opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(200px)'">
                    <p class="bottom-right" @click="lookmore">
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
import $ from 'jquery'
export default {
    data:function(){
        return {
            activeIndex:1,
            contentIndex:null,
            noticelist:[],
            noticefirst:{},
            action_scroll:0,
            action_scrolltitle:false,
            action_left:false,
            action_list:false,
            action_scrollbottom:false
        }
    },
    mounted:function(){
        this.allList4NewStyle("13,16,05,01,07",1);
        window.addEventListener('scroll',this.actionpage)
    },
    destroyed:function(){
         window.removeEventListener('scroll',this.actionpage)
    },
    methods:{
        actionpage:function(){
            var top=$('.home-action-contain .part-title').offset().top;
            var client=document.documentElement.clientHeight;
            var scroll=document.documentElement.scrollTop || document.body.scrollTop;
            if(top-client<=scroll){
                this.action_scrolltitle=true;
            }
            if(top-client+150<=scroll){
                this.action_left=true;
                this.action_list=true;
            }
            if(top-client+550<=scroll){
                this.action_scrollbottom=true;
            }
        },
        lookmore:function(){
            if(this.activeIndex==1||this.activeIndex==2){
                this.$router.push({
                    name: '绿账行动'
                })
            }else if(this.activeIndex==3){
                this.$router.push({
                    name:'绿账宝典',
                    params: { index: 3 }

                })
            }else if(this.activeIndex==4){
                this.$router.push({
                    name:'惠中绿色',
                })
            }else if(this.activeIndex==5){
                 this.$router.push({
                    name:'活动天地',
                    params: { index: 3 }
                })
            }else if(this.activeIndex==6){
                this.$router.push({
                    name:'绿账宝典',
                    params: { index: 1 }

                })
            }
        },
        allList4NewStyle:function(cate,index){
            this.activeIndex=index
            api.allList4NewStyle({
                data:{
                    category:cate,
                    startPage:1,
                    pageSize:6
                },
              }  
            ).then(res => {
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
                this.noticelist = res.data.newsList.content.splice(1,5);
            })
        }
    }
}
</script>

