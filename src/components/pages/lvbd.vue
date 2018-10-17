<template>
  <div class="lv_wrap">
    <div class="lv_bd_bread">您的位置：绿环保 > <span>绿账宝典</span></div>
    <ul class="lv_bd_tab">
      <li class="active" @click="allList4NewStyle">全部</li>
      <li @click="allList4NewStyleOne">政策法规</li>
      <li @click="allList4NewStyleTwo">标准规范</li>
      <li @click="allList4NewStyleThree">垃圾分类知识</li>
      <li @click="allList4NewStyleFour">操作指南</li>
    </ul>
    <div class="lv_bd_notice" v-for="(items,index) in listData" @mouseenter.stop="listHover(true,index)"
         @mouseleave.stop="listHover(false,index)">
      <router-link :to="{path: '/lvzhanghu/', query: { id: items.id }}">
        <div class="lv_bd_notice_title active" v-if="items.hoverShow">{{items.title}}<span class="date"><span>{{items
				.newsTime | momentTime}}</span><br/>{{items.newsTime | momentYear}}</span></div>
        <div class="lv_bd_notice_title" v-else>{{items.title}}<span class="date">{{items.newsTime | moment}}</span>
        </div>
        <div class="lv_bd_notice_text active" v-if="items.hoverShow">{{items.newsContent}}</div>
        <div class="lv_bd_notice_text" v-else>{{items.newsContent}}</div>
        <img src="@/assets/lvz_icon_arrow.png" alt="" class="lv_bd_arrow" v-if="items.hoverShow">
      </router-link>
    </div>
    <pagination></pagination>
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import '@/assets/pages/lvzhanghu.css';
  import pagination from '@/components/common/pagination.vue';

  export default {
    data() {
      return {
        listData: [],
      }
    },
    components: {pagination},
    mounted() {
      this.allList4NewStyle();
    },
    methods: {
      allList4NewStyle() {
        api.allList4NewStyle({
          data: {
            category: "05,06,07,24",
          },
        }).then(res => {
          res.data.newsList.content.map(items => {
            items.hoverShow = false;
          });
          this.listData = res.data.newsList.content;
        })
      },
      allList4NewStyleOne() {
        api.allList4NewStyle({
          data: {
            category: "05",
          },
        }).then(res => {
          res.data.newsList.content.map(items => {
            items.hoverShow = false;
          });
          this.listData = res.data.newsList.content;
        })
      },
      allList4NewStyleTwo() {
        api.allList4NewStyle({
          data: {
            category: "06",
          },
        }).then(res => {
          res.data.newsList.content.map(items => {
            items.hoverShow = false;
          });
          this.listData = res.data.newsList.content;
        })
      },
      allList4NewStyleThree() {
        api.allList4NewStyle({
          data: {
            category: "07",
          },
        }).then(res => {
          res.data.newsList.content.map(items => {
            items.hoverShow = false;
          });
          this.listData = res.data.newsList.content;
        })
      },
      allList4NewStyleFour() {
        api.allList4NewStyle({
          data: {
            category: "24",
          },
        }).then(res => {
          res.data.newsList.content.map(items => {
            items.hoverShow = false;
          });
          this.listData = res.data.newsList.content;
        })
      },
      listHover(status, index) {
        this.listData[index].hoverShow = status;
      },
    }
  }
</script>