<template>
  <div class="info-sidemenu">
    <div class="sidemenu-content">
      <el-menu :default-active="navindex" :router="true" style="background: #F4F4F4!important;border-right: 0!important;min-height: 600px;">
        <el-menu-item index="/my_change/all" :route="{path:'/my_change/all'}">
          <span slot="title">全部</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="/my_change/wait" :route="{path:'/my_change/wait'}">
          <span slot="title">待领取礼品</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="/my_change/already" :route="{path:'/my_change/already'}">
          <span slot="title">已领取礼品</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="/my_change/open_none" :route="{path:'/my_change/open_none'}">
          <span slot="title">未开奖礼品</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="/my_change/open_prize" :route="{path:'/my_change/open_prize'}">
          <span slot="title">已开奖奖品</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="/my_change/records" :route="{path:'/my_change/records'}">
          <span slot="title">活动记录</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="/exchange" :route="{path:'/exchange'}" @click="goexchange">
          <span slot="title">立即兑换</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
  import './changenav.css'
  import $ from 'jquery';
  export default {
    data:function() {
      return {
        navindex:'/my_change/all'
      }
    },
    mounted:function(){
      this.navindex=this.$route.path;
    },
    methods:{
      goexchange:function(){
        $('.exchangebtn').click();
      }
    }
  }
</script>

