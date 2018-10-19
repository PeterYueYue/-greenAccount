<template>
  <div>
    <div class="lv_wrap lv_bd_bread">您的位置：绿账户 > <span>绿色账户</span></div>
    <div class="lv_wrap lv_title">{{listData.newsTitle}}</div>
    <div class="lv_wrap lv_details_head">{{listData.newsNearestUpdateTime | moment}} 来源：{{listData.newsSource}}</div>
    <div class="lv_wrap lv_text" v-html="listData.newsContent"></div>
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import '@/assets/pages/lvzhanghu.css';

  export default {
    data() {
      return {
        id: this.$route.query.id,
        style: this.$route.query.style,
        listData: {},
      }
    },
    mounted() {
      this.lookNewsDetail();
      console.log(this.id);
      console.log(this.style);
    },
    methods: {
      lookNewsDetail() {
        api.lookNewsDetail({
          data: {
            "newsId": this.id,
            "style": this.style,
          },
        }).then(res => {
          this.listData = res.data.newsInfo;
        })
      },
    }
  }
</script>