<template>
  <div class="head-contain" :class="smallNav?'small':''">
    <el-row :gutter="24">
      <div class="head-left" @click="goHome">
        <router-link to="/"><img src="@/assets/logo.png" alt="" v-show="!smallNav"></router-link>
        <router-link to="/"><img src="@/assets/smalllogo.png" alt="" v-show="smallNav"></router-link>
      </div>
      <div class="head-right" :class="smallNav?'small':''">
        <el-row :gutter="24" v-show="!smallNav">
          <el-col :span="24" :offset="0" class="head-right-top">
            <div class="search-area">
              <el-input v-model="searchContent" placeholder="请输入您要查找的文章关键字" class="input-area"
                        @keyup.native.enter="search"></el-input>
              <div class="search-btn" @click="search"></div>
            </div>

            <div class="login-area" v-if="!isusername">
              <router-link to="/login">
                <div class="login-btn">登录</div>
              </router-link>

              <a href="https://www.greenfortune.sh.cn/company" target="view_window"><div class="login-btn">企业账户登录</div></a>
              <!-- <a href="http://180.153.19.162:8081/company" target="view_window"><div class="login-btn">企业账户登录</div></a> -->
              <a href="https://www.greenfortune.sh.cn/admin/toLogin" target="view_window"><div class="login-btn">管理员登录</div></a>
              <!-- <a href="http://180.153.19.162:8081/admin/toLogin" target="view_window"><div class="login-btn">管理员登录</div></a> -->
            </div>
            <div class="login-area islogin" v-if="isusername">
               <router-link to="/lvzx">
                <div class="username-area">Hi.{{isusername}}</div>
                </router-link>
             
              <div class="quit-btn" @click="quitHandle()">退出</div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="24" :class="smallNav?'small':''">
          <div class="head-bottom-left" v-if="fullPath!=='/exchange'"  v-show="!smallNav">
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
                    <li @click="chooseArea(item.brName,item.brID)" :class="isArea.id==item.id?'active':''">
                      {{item.brName}}
                    </li>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
          <div class="nav-contain head-bottom-right">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1" @mouseover.native="navIndex=1" @mouseleave.native="navIndex=0" ref="homebtn">
                <router-link to="/"><span class="nav-title homebtn">首页</span></router-link>
              </el-menu-item>
              <el-menu-item index="2" @mouseover.native="navIndex=2" @mouseleave.native="navIndex=activeIndex">
                <router-link to="/exchange"><span class="nav-title exchangebtn">礼品兑换</span></router-link>
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
                  <div @click="goToJump">我的兑换</div>
                  <div @click="goToJumpScore">我的积分</div>
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
                   <!--<router-link to="/lvzhanghu">-->
                    <!--<div>绿色账户</div>-->
                  <!--</router-link>-->
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
                    <div>公益志愿</div>
                  </router-link>
                  <router-link to="/hdtd">
                    <div>活动天地</div>
                  </router-link>
                  <router-link to="/games">
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
    data() {
      return {
        activeIndex: window.sessionStorage.getItem('activeItemIndex') || '1',
        areahover: false,
        navIndex: 1,
        searchContent: '',
        area: [],
        fullPath: this.$route.fullPath,
        smallNav:false
      }
    },
    props: ['username'],
    mounted() {
      this.getarea();
      window.onscroll = ()=>{   
        const t = document.documentElement.scrollTop || document.body.scrollTop;
        if (t != 0) {
          $('header').css('box-shadow', '0 0 6px rgba(0,0,0,.5)')
          this.smallNav=true
        } else {
          
          $('header').css('box-shadow', 'none')
          this.smallNav=false
        }

      };
    },
    computed: mapGetters({
      isArea: "area",
      isusername: "username",
      islogin: "user_islogin"
    }),
    watch: {
      '$route'(data) {
        this.fullPath = data.fullPath
      }
    },
    methods: {
      goHome(){
        $('.homebtn').click();
      },
      getarea() {
        api.getarea().then(res => {
          this.area = res.data
        })
      },
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        window.sessionStorage.setItem('activeItemIndex', key)
      },
      chooseArea(areaName, id) {
        this.$store.dispatch('chooseArea', {areaName, id});
        window.sessionStorage.setItem('areaName', areaName);
        window.sessionStorage.setItem('areaId', id);
      },

      quitHandle() {
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("username");
      window.sessionStorage.removeItem('resUuid')
      this.$store.dispatch('getToken', {token: '', userName: '', islogin: false});
      this.$store.dispatch('getResUuid', {resUuid:''});
        this.$router.push({
          path: '/'
        })
      },
      goToJump() {
        this.$router.push('/my_change/all')
      },
      goToJumpScore() {
        this.$router.push('/my_score/all')
      },
      search() {
        this.$router.push('/intelligence_search?query=' + this.searchContent)
        this.searchContent = ''
      },
    }

  }
</script>

