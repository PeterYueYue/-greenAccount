<template>
    <div class="lvzx-contain">
        <div class="lvzx-banner">
            <img src="@/assets/ex_banner.png" alt="">
        </div>
        <div class="userinfo-contain">
            <el-row>
                <el-col :span="4">
                    <div class="userinfo-side">
                        <infonav></infonav>
                    </div>
                </el-col>
                <el-col :span="20">
                    <div class="userinfo-content">
                        <router-view></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
    
</template>
<script>
import {mapGetters} from 'vuex';
import infonav from './commonNav/infonav.vue'
import '@/assets/pages/info.css'
import api from "@/api/api.js";
export default {
    data:function(){
        return {

        }
    },
    components:{
        infonav
    },
    computed: mapGetters({
      isusername:"username",
      islogin:"user_islogin",
      token:"token",
    }),
    created:function(){
        if(!this.islogin){
            this.$router.push({
                path:'/login?backUrl=lvzx'
            })
        }
        this.getuserdetail();
    },
    methods:{
        getuserdetail:function(){
            api.getuserdetail({
            "token":this.token
            }).then(res =>{
                this.$store.dispatch('getUserdetail', res.data);
            })
        }
    }
}
</script>

