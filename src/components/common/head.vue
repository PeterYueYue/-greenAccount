<template>
    <div class="head-contain">
        <el-row :gutter="24">
            <div  class="head-left">
                <router-link to="/"><img src="@/assets/logo.png" alt=""></router-link>
            </div>
            <div class="head-right">
                <el-row :gutter="24">
                    <el-col :span="24" :offset="0" class="head-right-top">
                        <div class="search-area">
                            <el-input v-model="searchContent" placeholder="请输入您要查找的文章关键字" class="input-area"></el-input>
                            <div class="search-btn"></div>
                        </div>
                        <div  class="login-area">
                            <div class="login-btn">登录</div>
                            <div class="login-btn">管理员登录</div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <div class="head-bottom-left">
                        <span>所在区域 :</span>
                        <div class="select-city-contain"  @mouseenter="areahover=true" @mouseleave="areahover=false;">
                            <span class="select-city" :class="{active:areahover}">&#x3000;全市</span>
                            <div class="area-contain" v-show="areahover" >
                                <ul class="area-list">
                                    <router-link to="/home_exchange"><li class="active">黄浦区</li></router-link>
                                    <li>徐汇区</li>
                                    <li>长宁区</li>
                                    <li>静安区</li>
                                    <li>徐汇区</li>
                                    <li>长宁区</li>
                                    <li>静安区</li>
                                </ul>
                            </div>
                        </div>  
                    </div>
                    <div class="nav-contain head-bottom-right">
                        <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
                            <el-menu-item index="1" @mouseover.native="navIndex=1" @mouseleave.native="navIndex=activeIndex">
                                <span class="nav-title">首页</span>
                            </el-menu-item>
                                <el-menu-item index="2" @mouseover.native="navIndex=2" @mouseleave.native="navIndex=activeIndex">
                                    <router-link to="/exchange"><span class="nav-title">礼品兑换</span></router-link>
                                </el-menu-item>
                            <el-menu-item index="3" disabled @mouseover.native="navIndex=3" @mouseleave.native="navIndex=activeIndex">
                                <span class="nav-title">绿账宝
                                    <img src="@/assets/icon/downangle.png" alt="" class="angle-icon" v-show="navIndex!=3">
                                    <img src="@/assets/icon/upangle.png" alt="" class="angle-icon" v-show="navIndex==3">
                                </span>
                                <div class="list-detail" v-show="navIndex==3">
                                    <router-link to="/lvzhanghu"><div>绿账积分</div></router-link>
                                    <router-link to="/lvbd"><div>我的兑换</div></router-link>
                                    <div>我的积分</div>
                                </div>                            
                            </el-menu-item>
                            <el-menu-item index="4" disabled @mouseover.native="navIndex=4" @mouseleave.native="navIndex=activeIndex">
                                <span class="nav-title">绿环保 
                                    <img src="@/assets/icon/downangle.png" alt="" class="angle-icon" v-show="navIndex!=4">
                                    <img src="@/assets/icon/upangle.png" alt="" class="angle-icon" v-show="navIndex==4">
                                </span>
                                <div class="list-detail" v-show="navIndex==4">
                                    <div>绿账积分</div>
                                    <div>我的兑换</div>
                                    <div>我的积分</div>
                                </div>                                  
                            </el-menu-item>
                            <el-menu-item index="5" disabled @mouseover.native="navIndex=5" @mouseleave.native="navIndex=activeIndex">
                                <span class="nav-title">绿互动
                                    <img src="@/assets/icon/downangle.png" alt="" class="angle-icon" v-show="navIndex!=5">
                                    <img src="@/assets/icon/upangle.png" alt="" class="angle-icon" v-show="navIndex==5">
                                </span>
                                <div class="list-detail" v-show="navIndex==5">
                                    <div>活动天地</div>
                                    <div>中行专区</div>
                                    <div>志愿者申请</div>
                                    <div>周周秀</div>
                                    <div>趣味游戏</div>
                                </div>                                 
                            </el-menu-item>
                            <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item>
                            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
                        </el-menu>
                    </div>
                </el-row>
            </div>
        </el-row>
    </div>
</template>
<script>
import './head.css'
export default {
    data(){
        return {
            activeIndex: '1',
            areahover:false,
            navIndex:1,
            searchContent:''
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(this.navIndex)
        console.log(key, keyPath);
      }
    }

}
</script>

