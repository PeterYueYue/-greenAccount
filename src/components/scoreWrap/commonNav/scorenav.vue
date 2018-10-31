<template>
  <div class="info-sidemenu">
    <div class="sidemenu-content">
      <el-menu default-active="1" style="background: #F4F4F4!important;border-right: 0!important;min-height: 600px;">
        <el-menu-item index="1" @click="all">
          <span slot="title">全部</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="2" @click="pointIn">
          <span slot="title">积分累计记录</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="3" @click="pointOut">
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
    data() {
      return {}
    },
    methods: {
      all() {
        this.$router.push({
          path: '/my_score/all',
        })
      },
      pointIn() {
        this.$router.push({
          path: '/my_score/point_in',
        })
      },
      pointOut() {
        this.$router.push({
          path: '/my_score/point_out',
        })
      },
    }
  }
</script>

