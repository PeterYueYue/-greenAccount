<template>
  <div class="lv_wrap">
    <div class="lv_bd_bread">您的位置：绿环保 > <span>合作单位</span></div>
    <ul class="lv_bd_tab">
      <li class="active" @click="allList4NewStyle">全部</li>
      <li @click="allList4NewStyleOne">支持单位</li>
      <li @click="allList4NewStyleTwo">爱心单位</li>
      <li @click="allList4NewStyleThree">理事单位</li>
    </ul>
    <div class="lv_dw_text">
      <div class="lv_dw_title">绿色账户支持单位</div>
      <div class="lv_dw_name" v-for="items in listDataOne">{{items.title}}</div>
    </div>
    <div class="lv_dw_text">
      <div class="lv_dw_title">绿色账户爱心单位</div>
      <div class="lv_dw_name" v-for="items in listDataTwo">{{items.title}}</div>
    </div>
    <div class="lv_dw_text">
      <div class="lv_dw_title">绿色账户理事单位</div>
      <div class="lv_dw_name" v-for="items in listDataThree">{{items.title}}</div>
    </div>
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import '@/assets/pages/lvzhanghu.css';

  export default {
    data() {
      return {
        listDataOne: [],
        listDataTwo: [],
        listDataThree: [],
      }
    },
    mounted() {
      this.allList4NewStyle();
      this.allList4NewStyleOne();
      this.allList4NewStyleTwo();
      this.allList4NewStyleThree();
    },
    methods: {
      allList4NewStyle() {
        api.allList4NewStyle({
          data: {
            category: "03,14,15",
          },
        }).then(res => {
          console.log(res);
        })
      },
      allList4NewStyleOne() {
        api.allList4NewStyle({
          data: {
            category: "03",
          },
        }).then(res => {
          this.listDataOne = res.data.newsList.content;
        })
      },
      allList4NewStyleTwo() {
        api.allList4NewStyle({
          data: {
            category: "14",
          },
        }).then(res => {
          this.listDataTwo = res.data.newsList.content;
        })
      },
      allList4NewStyleThree() {
        api.allList4NewStyle({
          data: {
            category: "15",
          },
        }).then(res => {
          this.listDataThree = res.data.newsList.content;
        })
      },
    }
  }
</script>