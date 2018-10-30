<template>
  <div class="info-sidemenu">
    <div class="sidemenu-content">
      <el-menu default-active="1" style="background: #F4F4F4!important;border-right: 0!important;min-height: 600px;">
        <el-menu-item index="1" @click="all">
          <span slot="title">全部</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="2" @click="wait">
          <span slot="title">待领取礼品</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="3" @click="already">
          <span slot="title">已领取礼品</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="4" @click="openNone">
          <span slot="title">未开奖礼品</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="5" @click="openPrize">
          <span slot="title">已开奖奖品</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="6" @click="records">
          <span slot="title">活动记录</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="7" @click="convert">
          <span slot="title">立即兑换</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>
  import './changenav.css'

  export default {
    data() {
      return {}
    },
    methods: {
      all() {
        this.$router.push({
          path: '/my_change/all',
        })
      },
      wait() {
        this.$router.push({
          path: '/my_change/wait',
        })
      },
      already() {
        this.$router.push({
          path: '/my_change/already',
        })
      },
      openNone() {
        this.$router.push({
          path: '/my_change/open_none',
        })
      },
      openPrize() {
        this.$router.push({
          path: '/my_change/open_prize',
        })
      },
      records() {
        this.$router.push({
          path: '/my_change/records',
        })
      },
      convert() {
        this.$router.push({
          path: '/exchange',
        })
      }
    }
  }
</script>

