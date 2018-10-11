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
                        <span>申城动态</span>
                        <span>行业新闻</span> 
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
                            <div class="date-day">09</div>
                            <div class="date-year">2018-04</div>
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
                    <div class="action-list" v-for="(item,index) in notice" :key="item.id">
                        <p class="small-content" :class="contentIndex!=index?'':'active'" @mouseenter="contentIndex=index">{{item.title}}...... <span class="notice-time">2018-02-24</span> </p>
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
                                        <div class="date-day">09</div>
                                        <div class="date-year">2018-04</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="action-list">
                        <p class="small-content" :class="contentIndex!=0?'':'active'" @mouseenter="contentIndex=0"> 【行业要闻】2018年春节长假，原来他们竟是这么度过的原来他们竟是这么度过的...... <span class="notice-time">2018-02-24</span> </p>
                        <div class="action-content-right-top" :class="contentIndex==0?'active':''">
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
                                        <div class="date-day">09</div>
                                        <div class="date-year">2018-04</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="action-list">
                        <p class="small-content"  :class="contentIndex!=1?'':'active'" @mouseenter="contentIndex=1"> 【行业要闻】2018年春节长假，原来他们竟是这么度过的原来他们竟是这么度过的...... <span class="notice-time">2018-02-24</span> </p>
                    </div>
                    <div class="action-list">
                        <p class="small-content"  :class="contentIndex!=2?'':'active'" @mouseenter="contentIndex=2"> 【行业要闻】2018年春节长假，原来他们竟是这么度过的原来他们竟是这么度过的...... <span class="notice-time">2018-02-24</span> </p>
                    </div>
                    <div class="action-list">【行业要闻】2018年春节长假，原来他们竟是这么度过的原来他们竟是这么度过的...... <span class="notice-time">2018-02-24</span></div>
                    <div class="action-list">
                        <p class="small-content"  :class="contentIndex!=3?'':'active'" @mouseenter="contentIndex=3">【行业要闻】2018年春节长假，原来他们竟是这么度过的原来他们竟是这么度过的...... <span class="notice-time">2018-02-24</span></p>
                        <div class="action-content-right-top" :class="contentIndex==3?'active':''">
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
                                        <div class="date-day">09</div>
                                        <div class="date-year">2018-04</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
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
            notice:[],
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
                    pageSize:5
                },
              }  
            ).then(res => {
                console.log(res)
                this.notice = res.data.newsList.content
            })
        }
    }
}
</script>

