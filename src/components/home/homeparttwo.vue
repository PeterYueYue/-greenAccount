<template>
    <div class="home-active-contain" ref="activeContain">
        <div class="home-active-puben"></div>
        <div class="home-active-content">
            <div class="part-title" :style="scrolltitle?' opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(100px)'">
                <div class="title-left">
                    <p class="title-name">绿账活动</p>
                    <p class="en-title-name">EVENTS GALLERY</p>
                </div>
                
            </div>
            <div class="part-content">
                <div class="active-content-left partone" :style="scrolllist?' opacity: 1;transform: translateY(0)':' opacity: 0;transform: translateY(200px)'">
                    <p class="active-content-title" :class="whichpart?'active':''" @click="whichpart=true">
                        <span class="active-line"></span> 积分捐赠
                    </p>
                    <p class="active-content-title"  :class="!whichpart?'active':''" @click="whichpart=false">
                        <span class="active-line"></span> 公益志愿    
                    </p>
                </div>
                <div class="active-content-right" v-if="whichpart">
                    <div class="active-content-big-img" :style="scrollbig?' opacity: 1;transform: translateY(0);transition:all 1.5s .2s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .2s'">
                        <img src="@/assets/heart.png" alt="" class="img-items" :class="{active:activeIndex==0}">
                        <img src="@/assets/activeone.png" alt="" class="img-items" :class="{active:activeIndex==1}">
                        <img src="@/assets/heart.png" alt="" class="img-items" :class="{active:activeIndex==2}">
                    </div>
                    <div class="active-content-des" :style="scrollcontent?' opacity: 1;transform: translateY(0);transition:all 1.5s .3s':' opacity: 0;transform: translateY(300px);transition:all 1.5s .3s'">
                        <div class="active-content-item" :class="{active:activeIndex==index}" v-for="(item,index) in activeList" :key="index">
                            <div class="active-content-des-title">
                                <p>{{item.activityName}}</p>
                            </div>
                            <div class="active-content-detail">
                                <!-- <p>{{item.activityInfo}}</p> -->
                                <p>
                                    主办单位： 
                                    <span v-for="(items,index) in item.organizer" :key="index">{{items}}&#x3000;</span>
                                    <!-- <span>松江区方松街道办事处&#x3000;</span>
                                    <span>松江区益行企业家促进会</span>             -->
                                </p>
                                <p>
                                    活动时间：{{item.beginDateVo}}——{{item.endDateVo}}
                                </p>
                                <p>
                                    捐分范围：{{item.donateFor}}
                                </p>
                                <p>
                                    爱心企业：{{item.caringEnterprise}}
                                </p>
                                <p>
                                    爱心礼包：{{item.donateGoods}}
                                </p>
                            </div>
                            <div class="active-content-more">
                                <router-link :to="'/integral_detail/?id='+item.id">
                                    <span>点击查看全部</span> 
                                    <img src="@/assets/icon/exchangeright.png" alt="" class="more-right-icon">
                                </router-link>        
                            </div>
                        </div> 
                    </div>
                    <div class="active-maintitle" :style="scrollmaintitle?' opacity: 1;transform: translateY(0);transition:all 1.5s .3s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .3s'">
                        <div class="white-back">
                            <div>01</div>
                            <div>
                                积分捐赠
                            </div>
                        </div>
                        <div class="tip-icon">新活动</div>
                    </div>
                    <div class="active-content-small-img" :style="scrollsmall?' opacity: 1;transform: translateY(0);transition:all 1.5s .3s':' opacity: 0;transform: translateY(200px);transition:all 1.5s .3s'">
                        <div class="active-content-small-inside">
                            <img src="@/assets/heart.png" alt="" class="small-img-items" :class="{active:activeIndex==0}">
                            <img src="@/assets/activeone.png" alt="" class="small-img-items" :class="{active:activeIndex==1}">
                            <!-- <img src="@/assets/heart.png" alt="" class="small-img-items" :class="{active:activeIndex==2}"> -->
                        </div>
                    </div>
                    <div class="active-btn partone" :style="scrollbtn?' opacity: 1;transform: translateY(0);':' opacity: 0;transform: translateY(200px);'">
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
                <div class="active-content-right" v-if="!whichpart">
                    <div class="lv_volunteer_list" v-for="(items,index) in activelistData" @mouseenter.stop="listHover(false,index)" @mouseleave.stop="listHover(true,index)" :key="index">
                        <router-link :to="{path: '/lv_volunteer_details/', query: { id: items[5] }}">
                        <div class="title">{{items[1]}}</div>
                        <div class="text"><img src="@/assets/lv_v_icon_heart.png" alt="" class="lv_volunteer_icon" v-if="items[7]">
                            <img src="@/assets/lv_v_icon_heart_select.png" alt="" class="lv_volunteer_icon" v-else>{{items[6]}}<img
                              src="@/assets/lv_v_icon_address.png" alt="" class="lv_volunteer_icon_address" v-if="items[7]"><img
                              src="@/assets/lv_v_icon_address_select.png" alt="" class="lv_volunteer_icon_address" v-else>{{items[2]}}
                        </div>
                        <div class="text">
                            <img src="@/assets/lv_v_icon_date.png" alt="" class="lv_volunteer_icon" v-if="items[7]"><img src="@/assets/lv_v_icon_date_select.png" alt="" class="lv_volunteer_icon" v-else>活动日期：{{items[3]}}<span class="progress" v-show="items[4]==='进行中'">进行中</span><span class="finished" v-show="items[4]==='已结束'">已结束</span>
                        </div>
                        </router-link>
                    </div>
                </div>
                <div class="bottom-title-right">
                    <router-link :to="whichpart?'/integral_list':'/lv_volunteer'">
                        <p>
                            <span class="lv_volunteer_hover">点击查看全部 ></span>
                            <!--<img src="@/assets/icon/exchangeright.png" alt="" class="title-right-icon">  -->
                        </p>
                    </router-link>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import api from "@/api/api.js";
export default {
    data:function(){
        return {
            scroll:'',
            scrolltitle:false,
            scrolllist:false,
            scrollbig:false,
            scrollmaintitle:false,
            scrollcontent:false,
            scrollsmall:false,
            scrollbtn:false,
            activeIndex:0,
            activeCount:0,
            activebtnleft:0,
            activebtnright:0,
            smallactiveIndex:0,
            activelistData:'',
            whichpart:true,
            activeList:''
        }
    },
    mounted(){
       window.addEventListener('scroll',this.page);
       this.homepubActList();
       this.getDonateActivity();
    },
    destroyed(){
         window.removeEventListener('scroll',this.page)
    },
    methods:{
        page(){
            var top=$('.home-active-contain .part-title').offset().top;
            var client=document.documentElement.clientHeight;
            var scroll=document.documentElement.scrollTop || document.body.scrollTop;
            if(top-client+10<=scroll){
                this.scrolltitle=true
            }
            if(top-client+50<=scroll){
                this.scrolllist=true;
                this.scrollbig=true;
                this.scrollmaintitle=true;
            }
            if(top-client+150<=scroll){
                this.scrollcontent=true
            }
            if(top-client+400<=scroll){
                this.scrollbtn=true;
                this.scrollsmall=true;
            }            
        },
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
        getDonateActivity(){
            api.getDonateActivity().then(res =>{
                this.activeList=res.data;
                // this.activeList.organizer=this.activeList.organizer.split(",");
                this.activeList.forEach(item => {
                    item.organizer=item.organizer.split(",")
                });
                this.activeCount=this.activeList.length-1
            })
        },
         homepubActList() {
            api.pubActList({
                data:{
                    startPage:1,
                    pageSize:4
                }
            }).then(res => {
	            res.data.pubActList.content.map(items => {
		            items.push(true);
	            });
            this.activelistData = res.data.pubActList.content;
            })
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
                 this.smallactiveIndex=this.activeIndex+1;
                 $('.small-img-items').css('transform','translateX(-'+(207*this.smallactiveIndex)+'px)')
            }
        },
	      listHover(status, index) {
		        this.activelistData[index].pop();
		        this.activelistData[index].push(status)
	    },
    },
        
}
</script>

