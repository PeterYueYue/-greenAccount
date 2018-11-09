<template>
  <div class="info-sidemenu">
    <div class="sidemenu-content">
      <el-menu :default-active="navindex" :router="true" style="background: #F4F4F4!important;border-right: 0!important;min-height: 600px;">
        <el-menu-item index="/my_score/all" :route="{path:'/my_score/all'}">
          <span slot="title">全部</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="/my_score/point_in" :route="{path:'/my_score/point_in'}">
          <span slot="title">积分累计记录</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="/my_score/point_out" :route="{path:'/my_score/point_out'}">
          <span slot="title">积分消费记录</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
  import './scorenav.css'

  export default {
    data:function() {
      return {
        navindex:'/my_score/all'
      }
    },
    mounted:function(){
      this.navindex=this.$route.path;
    }
  }
</script>

