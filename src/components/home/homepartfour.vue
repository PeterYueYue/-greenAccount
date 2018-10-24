<template>
    <div class="home-rank-contain">
        <div class="home-rank-content">
            <div class="part-title" :style="rank_scrolltitle?' opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(100px)'" ref="exchangetitle">
                <div class="title-left">
                    <p class="title-name">绿账排行</p>
                    <p class="en-title-name"> RANKING LIST</p>
                </div>
            </div>
            <div class="part-content">
                <div class="org-rank" style="width:40%" :style="rank_scrollorg?'opacity: 1;transform: translateY(0);transition:all 1.5s .2s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .2s'">
                    <p class="title">荣誉公益组织公示</p>
                    <table>
                        <thead>
                            <tr class="table-title">
                                <td style="width:1%">排名</td>
                                <td style="width:10%">组织名称</td>
                                <td style="width:3%">活动数</td>
                                <td style="width:3%">荣誉</td>
                            </tr>  
                        </thead>
                        <tbody>
                            <tr class="table-content" v-for="(item,index) in orglist" :key="index" :style="rank_scrollitem?'opacity: 1;transform: translateY(0);transition:all 1.5s .'+index+'s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .'+index+'s'">
                                <td style="width:1%">
                                    <img src="@/assets/orgfirst.png" alt="" v-if="index==0">
                                    <img src="@/assets/orgsecond.png" alt="" v-if="index==1">
                                    <span v-if="index!=0&&index!=1">
                                        {{index+1}}
                                    </span>
                                </td>
                                <td>{{item.orgNamge}}</td>
                                <td>{{item.orgCount}}</td>
                                <td>{{item.orgPraSum}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="user-rank partone" style="width:35%" :style="rank_scrolluser?'opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(200px)'">
                    <p class="title">积分捐赠用户表彰</p>
                    <table>
                        <thead>
                            <tr class="table-title">
                                <td style="width:1%">排名</td>
                                <td style="width:15%">姓名</td>
                                <td style="width:4%">活动数</td>
                            </tr>  
                        </thead>
                        <tbody>
                            <tr class="table-content " v-for="(item,index) in userlist" :key="index" :style="rank_scrollitem?'opacity: 1;transform: translateY(0);transition:all 1.5s .'+index+'s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .'+index+'s'">
                                <td style="width:1%">
                                    <img src="@/assets/userfirst.png" alt="" v-if="item[0]==1">
                                    <img src="@/assets/usersecond.png" alt="" v-if="item[0]==2">
                                     <span v-if="item[0]!=1&&item[0]!=2">
                                        {{item[0]}}
                                    </span>
                                </td>
                                <td>{{item[1]}}</td>
                                <td>{{item[2]}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="donate-notice" style="width:23%" :style="rank_scrollnotice?'opacity: 1;transform: translateY(0);transition:all 1.5s .2s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .2s'">
                    <p class="title">捐赠公示</p>
                    <div class="donate-detail" :style="rank_scrollitem?'opacity: 1;transform: translateY(0);transition:all 1.5s .1s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .1s'">
                        <div class="donate-time">2018-11-02 07:28:07</div>
                        <div class="donate-title">环卫工人爱心午饭，11月反馈</div>
                        <div class="donate-content">2017年12月至2018年1月期间，上海依米服饰有限公司已为放松街道小区垃圾分拣员累计捐出330件爱心礼包2017年12月至2018年1月期间，上海依米服饰有限公司已为放松街道小区垃圾分拣员累计捐出330件爱心礼包...</div>
                        </div>
                    <div class="donate-more">
                        <span>查看更多...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from "@/api/api.js";
import $ from 'jquery';
export default {
    data(){
        return {
            orglist:[],
            userlist:[],
            rank_scrolltitle:false,
            rank_scrolluser:false,
            rank_scrollorg:false,
            rank_scrollnotice:false,
            rank_scrollitem:false,
        }
    },
    mounted(){
        this.getActNotice();
        this.getdoninteglist();
        window.addEventListener('scroll',this.rankpage)
    },
    destroyed(){
         window.removeEventListener('scroll',this.rankpage)
    },
    methods:{
        rankpage(){
            var top=$('.home-rank-contain .part-title').offset().top;
            var client=document.documentElement.clientHeight;
            var scroll=document.documentElement.scrollTop || document.body.scrollTop;
            if(top-client<=scroll){
                this.rank_scrolltitle=true
            }
            if(top-client+150<=scroll){
                this.rank_scrolluser=true;
                this.rank_scrollorg=true;
                this.rank_scrollnotice=true;
                this.rank_scrollitem=true;
            }
        },
        getActNotice(){
            api.getActNotice().then(res => {
                this.orglist = res.data
            })
        },
        getdoninteglist(){
            api.getdoninteglist5().then(res =>{
                this.userlist = res.data;
            })
        }
        
    }
}
</script>

