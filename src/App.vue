<template>
  <div id="app">
    <el-container>
      <el-header v-if="!isloginPage">
        <head-content :username="userName"></head-content>
      </el-header>
      <el-main :class="isloginPage?'login':''">
        <router-view/>
      </el-main>
      <el-footer v-if="!isloginPage">
        <footer-content></footer-content>
        <div class="footer-copyright">
          <p>
            <span>COPYRIGHT 2014-2019 SHANGHAI HUIZHONG GREEN C.S.R</span>&#x3000;
            <span>上海惠众绿色公益发展促进中心 版权所有 2014-2019</span>
          </p>
          <p>
            <span>
              <a href="http://www.miibeian.gov.cn/" target="view_window">沪ICP 15028111号-1 </a></span>&#x3000;
            <span>
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502000208" target="view_window"><img
                src="@/assets/icon_security.png" alt="" class="app_security"> 沪公网安备 310105020000208</a>
             
              </span>
          </p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
  import '@/components/common/tool.css';
  import headContent from '@/components/common/head.vue'
  import footerContent from '@/components/common/footer.vue'
  import {mapGetters} from 'vuex';
  export default {
    name: 'App',
    components: {
      headContent,
      footerContent
    },
    data(){
      return {
         userName:'',
         login:false,
      }
    },
    computed: mapGetters({
        isloginPage:"isloginPage",
    }),
    beforeCreate(){
       if(window.sessionStorage.getItem("username")){
          this.login=true
          }else this.login=false
          this.userName=window.sessionStorage.getItem("username")
          this.$store.dispatch('getToken', {token: window.sessionStorage.getItem("token"),userName: window.sessionStorage.getItem("username"),islogin:this.login})
          this.$store.dispatch('getResUuid', {resUuid: window.sessionStorage.getItem("resUuid")});
          this.$store.dispatch('getapproveStatus', {approveStatus: window.sessionStorage.getItem("approveStatus")});
          console.log()
          this.$store.dispatch('getusercode', window.sessionStorage.getItem("usercode"));
    },
  }
</script>

