<template>
  <div class="info-sidemenu">
    <div class="sidemenu-content">
      <el-menu default-active="1" style="background: #F4F4F4!important;border-right: 0!important;min-height: 600px;">
        <el-menu-item index="1">
          <span slot="title">全部</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title">积分累计记录</span>
          <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
        </el-menu-item>
        <el-menu-item index="3">
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
    }
  }
</script>

