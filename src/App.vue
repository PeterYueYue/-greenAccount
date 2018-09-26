<template>
  <div id="app">
    <el-container>
      <el-header>
          <head-content></head-content>
      </el-header>
      <el-main></el-main>
      <el-footer>
          <footer-content></footer-content>
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
  components:{
    headContent,
    footerContent
  }
}
</script>

