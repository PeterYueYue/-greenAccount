<template>
    <div class="info-sidemenu">
        <div class="sidemenu-content">
            <el-menu :default-active="navindex" :router="true" @select="handleSelect">
                <el-menu-item index="/lvzx" :route="{path:'/lvzx'}">  
                    <span slot="title">基本信息</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="/lvzx/barcodematch" :route="{path:'/lvzx/barcodematch'}">
                    <span slot="title">条形码匹配</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="/lvzx/barcodesearch" :route ="{path:'/lvzx/barcodesearch'}">
                    <span slot="title">匹配条码查询</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="/lvzx/createcard" :route ="{path:'/lvzx/createcard'}" v-if="userdetail.residentVO.accountType=='套卡'?true:false">  
                    <span slot="title">开卡补卡管理</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="/lvzx/twonet" :route ="{path:'/lvzx/twonet'}">  
                    <span slot="title">二网合一</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="/lvzx/inttran" :route ="{path:'/lvzx/inttran'}">
                    <span slot="title">积分转移</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="/lvzx/changepassword" :route ="{path:'/lvzx/changepassword'}">
                    <span slot="title">密码更改</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="/lvzx/feedback" :route ="{path:'/lvzx/feedback'}">  
                    <span slot="title">意见反馈</span>
                   <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="/lvzx/message" :route ="{path:'/lvzx/message'}">
                    <span slot="title">我的消息</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
                <el-menu-item index="/lvzx/address" :route ="{path:'/lvzx/address'}">
                    <span slot="title">配送地址</span>
                    <i class="el-submenu__icon-arrow el-icon-arrow-right"></i>
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
import './infonav.css'
export default {
    data:function(){
        return {
            navindex:`/lvzx`,
            cardtype:false
        }
    },
    mounted:function(){
        this.navindex=this.$route.path;
    },
    computed: mapGetters({
      islogin:"user_islogin",
      userdetail:"userdetail"
    }),
    methods:{
        handleSelect:function(){
            if(!this.islogin){
                this.$router.push({
                    path:'/login'
                })
            }
        }
    }
}
</script>

