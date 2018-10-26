<template>
  <div>
    <img src="@/assets/ex_banner.png" alt="" class="ex_banner">
    <div class="score_contain">
      <el-row>
        <el-col :span="4">
          <div>
            <scorenav></scorenav>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="score_content">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import scorenav from './commonNav/scorenav.vue'
  import '@/components/scoreWrap/commonNav/scorenav.css'

  export default {
    data() {
      return {}
    },
    components: {
      scorenav
    },
    computed: mapGetters({
      isusername: "username",
      islogin: "user_islogin"
    }),
    created() {
      console.log(this.islogin);
      if (!this.islogin) {
        this.$router.push({
          path: '/login'
        })
      }
    }
  }
</script>

