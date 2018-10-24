<template>
  <div class="head-contain">
    <el-row :gutter="24">
      <div class="head-left">
        <router-link to="/" ><img src="@/assets/logo.png" alt="" ></router-link>
      </div>
      <div class="head-right">
        <el-row :gutter="24">
          <el-col :span="24" :offset="0" class="head-right-top">
            <div class="search-area">
              <el-input v-model="searchContent" placeholder="请输入您要查找的文章关键字" class="input-area"></el-input>
              <div class="search-btn"></div>
            </div>

            <div  class="login-area" v-if="!isusername">
                <router-link to="/login">
                    <div class="login-btn">登录</div>
                </router-link>
                
                <div class="login-btn">管理员登录</div>
            </div>
            <div class="login-area islogin" v-if="isusername">
                <div class="username-area">Hi.{{isusername}}</div>
                <div class="quit-btn" @click="quitHandle()">退出</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <div class="head-bottom-left">
            <span>所在区域 :</span>
            <div class="select-city-contain" @mouseenter="areahover=true" @mouseleave="areahover=false;">
              <span class="select-city"
                    :class="{active:areahover}">&#x3000;{{isArea.areaName ? isArea.areaName : '全市'}}</span>
              <div class="area-contain" v-show="areahover">
                <ul class="area-list" @click="handleSelect('1')">
                  <router-link :to="{path: '/home_exchange'}">
                    <li @click="chooseArea('全市','310000000000')" :class="isArea.id=='310000000000'?'active':''">全市</li>
                  </router-link>
                  <router-link :to="{path: '/home_exchange'}"
                               v-for="item in area" :key="item.id">
                    <li @click="chooseArea(item.brName,item.brID)" :class="isArea.id==item.id?'active':''">{{item.brName}}</li>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
          <div class="nav-contain head-bottom-right">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1" @mouseover.native="navIndex=1" @mouseleave.native="navIndex=0" ref="homebtn">
                <router-link to="/"><span class="nav-title">首页</span></router-link>
              </el-menu-item>
              <el-menu-item index="2" @mouseover.native="navIndex=2" @mouseleave.native="navIndex=activeIndex">
                <router-link to="/exchange"><span class="nav-title">礼品兑换</span></router-link>
              </el-menu-item>
              <el-menu-item index="3" disabled @mouseover.native="navIndex=3" @mouseleave.native="navIndex=0">
                    <span class="nav-title">绿账宝
                        <img src="@/assets/icon/downangle.png" alt="" class="angle-icon"
                                v-show="navIndex!=3">
                        <img src="@/assets/icon/upangle.png" alt="" class="angle-icon" v-show="navIndex==3">
                    </span>
                <div class="list-detail" v-show="navIndex==3" @click="handleSelect('3')">
                  <router-link to="/lvzx">
                    <div>绿账中心</div>
                  </router-link>
                   <router-link to="/apply_company">
                      <div>爱心单位</div>
                  </router-link>
                </div>
              </el-menu-item>
              <el-menu-item index="4" disabled @mouseover.native="navIndex=4" @mouseleave.native="navIndex=0">
                    <span class="nav-title">绿环保 
                        <img src="@/assets/icon/downangle.png" alt="" class="angle-icon"
                                v-show="navIndex!=4">
                        <img src="@/assets/icon/upangle.png" alt="" class="angle-icon" v-show="navIndex==4">
                    </span>
                <div class="list-detail" v-show="navIndex==4" @click="handleSelect('4')">
                   <router-link to="/lvbd">
                    <div>绿账宝典</div>
                  </router-link>
                  <router-link to="/lvxd">
                    <div>绿账行动</div>
                  </router-link>
                  <router-link to="/hzdw">
                    <div>合作单位</div>
                  </router-link>
                   <router-link to="/hzvs">
                    <div>惠众绿色</div>
                  </router-link>
                  <router-link to="/zhzq">
                    <div>中行专区</div>
                  </router-link>
                </div>
              </el-menu-item>
              <el-menu-item index="5" disabled @mouseover.native="navIndex=5" @mouseleave.native="navIndex=0">
                    <span class="nav-title">绿互动
                        <img src="@/assets/icon/downangle.png" alt="" class="angle-icon"
                                v-show="navIndex!=5">
                        <img src="@/assets/icon/upangle.png" alt="" class="angle-icon" v-show="navIndex==5">
                    </span>
                <div class="list-detail" v-show="navIndex==5" @click="handleSelect('5')">
                   <router-link to="/integral_list">
                    <div>积分捐赠</div>
                  </router-link>
                   <router-link to="/lv_volunteer">
                    <div>志愿者申请</div>
                  </router-link>
                  <router-link to="/hdtd">
                    <div>活动天地</div>
                  </router-link>
                  <router-link  to="/games">
                    <div>趣味游戏</div>
                  </router-link>
                  
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
import api from "@/api/api.js";
import {mapGetters} from 'vuex';
import $ from 'jquery';
import './head.css'
export default {
    data(){
        return {
            activeIndex: window.sessionStorage.getItem('activeItemIndex') || '1',
            areahover:false,
            navIndex:1,
            searchContent:'',
            area:[],
        }
    },
    props:['username'],
    mounted(){
        this.getarea();
        window.onscroll = function () {
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            if(t!=0){
                $('header').css('box-shadow','0 0 6px rgba(0,0,0,.5)')
            }else {
                $('header').css('box-shadow','none')
            }
           
        };
    },
    computed: mapGetters({
      isArea:"area",
      isusername:"username",
      islogin:"user_islogin"
    }),
    methods: {
     getarea(){
         api.getarea().then(res =>{
            this.area=res.data
        })
     },
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        window.sessionStorage.setItem('activeItemIndex', key)
    },
    chooseArea(areaName, id){
        this.$store.dispatch('chooseArea', {areaName, id});
        window.sessionStorage.setItem('areaName', areaName);
        window.sessionStorage.setItem('areaId', id);
    },
    // goHome(){
    //     console.log('222')
    //     $(this.$refs.homebtn).click()
    // },
      quitHandle(){
          this.$cookies.remove("token");
          this.$cookies.remove("username");
          this.$store.dispatch('getToken', {token:'',userName:'',islogin:false});
          this.$router.push({
            path:'/'
        })
      }
    }

	}
</script>

