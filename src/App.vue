<template>
  <div id="app">
    <el-container>
      <el-header>
        <head-content></head-content>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <footer-content></footer-content>
        <div class="footer-copyright">
          <p>
            <span>COPYRIGHT 2014-2019 SHANGHAI HUIZHONG GREEN C.S.R</span>&#x3000;
            <span>上海惠众绿色公益发展促进中心 版权所有 2014-2019</span>
          </p>
          <p>
            <span>沪ICP 15028111号-1</span>&#x3000;
            <span>沪公网安备 310105020000208</span>
          </p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import '@/assets/tool.css'
  import headContent from '@/components/common/head.vue'
  import footerContent from '@/components/common/footer.vue'

  export default {
    name: 'App',
    components: {
      headContent,
      footerContent
    }
  }
</script>

