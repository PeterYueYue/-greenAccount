<template>
  <div class="lv_wrap">
    <div class="lv_bd_bread">您的位置：首页 > <span>智能搜索</span></div>
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
      }
    },
    components: {pagination},
    mounted() {
      this.searchLike();
    },
    methods: {
      searchLike() {
        // const params = {
        //   name: this.searchContent,
        // };
        api.searchLike({
          data: {
            name: "绿账",
            pageSize: "3",
            startPage: "2"
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