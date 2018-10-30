<template>
  <div>
    <img src="@/assets/ex_banner.png" alt="" class="ex_banner">
    <div class="change_contain">
      <el-row>
        <el-col :span="4">
          <div>
            <changenav></changenav>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="change_content">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import changenav from './commonNav/changenav.vue'
  import '@/components/changeWrap/commonNav/changenav.css'

  export default {
    data() {
      return {}
    },
    components: {
      changenav
    },
    computed: mapGetters({
      isusername: "username",
      islogin: "user_islogin"
    }),
    created() {
      if (!this.islogin) {
        this.$router.push({
          path: '/login?backUrl=my_change/all'
        })
      }
    }
  }
</script>

