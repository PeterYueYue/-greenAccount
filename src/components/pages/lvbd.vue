<template>
  <div class="lv_wrap">
    <div class="lv_bd_bread">您的位置：绿环保 > <span>绿账宝典</span></div>
    <ul class="lv_bd_tab">
      <li :class="activeIndex===0?'active':''" @click="allList4NewStyle(0)">全部</li>
      <li :class="activeIndex===1?'active':''" @click="allList4NewStyle(1)">政策法规</li>
      <li :class="activeIndex===2?'active':''" @click="allList4NewStyle(2)">标准规范</li>
      <li :class="activeIndex===3?'active':''" @click="allList4NewStyle(3)">垃圾分类知识</li>
      <li :class="activeIndex===4?'active':''" @click="allList4NewStyle(4)">操作指南</li>
    </ul>
    <div class="lv_bd_notice" v-for="(items,index) in listData" @mouseenter.stop="listHover(true,index)"
         @mouseleave.stop="listHover(false,index)" v-show="listData.length !== 0">
      <router-link :to="{path: '/lvzhanghu/', query: { id: items.id, style: items.newsStyle }}">
        <div class="lv_bd_notice_title active" v-if="items.hoverShow">{{items.title}}<span class="date"><span>{{items
					.newsTime | momentTime}}</span><br/>{{items.newsTime | momentYear}}</span></div>
        <div class="lv_bd_notice_title" v-else>{{items.title}}<span class="date">{{items.newsTime | moment}}</span>
        </div>
        <div class="lv_bd_notice_text active" v-if="items.hoverShow">{{items.newsContent}}</div>
        <div class="lv_bd_notice_text" v-else>{{items.newsContent}}</div>
        <img src="@/assets/lvz_icon_arrow.png" alt="" class="lv_bd_arrow" v-if="items.hoverShow">
      </router-link>
    </div>
    <div class="lv_nodata" v-show="listData.length == 0">暂无数据</div>
    <pagination v-show="listData.length !== 0"></pagination>
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
        activeIndex: 0
      }
    },
    components: {pagination},
    mounted() {
      this.activeIndex=this.$route.params.index||0
      this.allList4NewStyle(this.$route.params.index||0);
    },
    methods: {
      allList4NewStyle(status) {
        let category = '';
        switch (status) {
          case 0:
            category = '05,06,07,24';
            break;
          case 1:
            category = '05';
            break;
          case 2:
            category = '06';
            break;
          case 3:
            category = '07';
            break;
          case 4:
            category = '24';
            break;
          default:
            category = '05,06,07,24';
            break;
        }
        api.allList4NewStyle({
          data: {
            category: category,
          },
        }).then(res => {
          res.data.newsList.content.map(items => {
            items.hoverShow = false;
          });
          this.listData = res.data.newsList.content;
          this.activeIndex = status
        })
      },
      listHover(status, index) {
        this.listData[index].hoverShow = status;
      },
    }
  }
</script>