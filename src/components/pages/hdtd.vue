<template>
  <div class="lv_wrap">
    <div class="lv_bd_bread">您的位置：绿互动 > <span>活动天地</span></div>
    <ul class="lv_bd_tab">
      <li :class="activeIndex===0?'active':''" @click="allList4NewStyle(0)">全部</li>
      <li :class="activeIndex===1?'active':''" @click="allList4NewStyle(1)">活动预告</li>
      <li :class="activeIndex===2?'active':''" @click="allList4NewStyle(2)">活动成果</li>
      <li :class="activeIndex===3?'active':''" @click="allList4NewStyle(3)">中奖名单</li>
      <li :class="activeIndex===4?'active':''" @click="allList4NewStyle(4)">抽奖活动</li>
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
            category = '09,10,18,23';
            break;
          case 1:
            category = '09';
            break;
          case 2:
            category = '10';
            break;
          case 3:
            category = '18';
            break;
          case 4:
            category = '23';
            break;
          default:
            category = '09,10,18,23';
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