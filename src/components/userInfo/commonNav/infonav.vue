<template>
    <div class="info-sidemenu">
        <div class="sidemenu-content">
            <el-menu default-active="2">
                <el-menu-item index="1">  
                    <span slot="title">基本信息</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="2">
                    <span slot="title">条形码匹配</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="3">
                    <span slot="title">匹配条码查询</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="4">  
                    <span slot="title">开卡补卡管理</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="5">
                    <span slot="title">积分转移</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="6">
                    <span slot="title">密码更改</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="7">  
                    <span slot="title">意见反馈</span>
                   <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="8">
                    <span slot="title">我的消息</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="9">
                    <span slot="title">配送地址</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
import './infonav.css'
export default {
    data(){
        return {

        }
    }
}
</script>

