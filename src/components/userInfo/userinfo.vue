<template>
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
</template>
<script>
import {mapGetters} from 'vuex';
import infonav from './commonNav/infonav.vue'
import '@/assets/pages/info.css'
export default {
    data(){
        return {

        }
    },
    components:{
        infonav
    },
    computed: mapGetters({
      isusername:"username",
      islogin:"user_islogin"
    }),
    created(){
        console.log(this.islogin);
        if(!this.islogin){
            this.$router.push({
                path:'/login'
            })
        }
    }
}
</script>

