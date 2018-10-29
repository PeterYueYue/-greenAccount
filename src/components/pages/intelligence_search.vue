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
    <div class="pagination_wrap">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pageCount"
        :page-size="pageSize"
        @current-change="pageChange"
        :current-page.sync="startPage"
        v-show="listData.length !== 0">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import '@/assets/pages/lvzhanghu.css';
  import '@/components/common/pagination.css';

  export default {
    data() {
      return {
        query: this.$route.query.query,
        listData: [],
        pageCount: 0,    //总条数
        pageSize: 3,     //每页条数
        startPage: 1,    //当前页
      }
    },
    mounted() {
      this.searchLike(1, 3);
    },
    watch: {
      '$route'(to, from) {
        if (to.query.query !== from.query.query) {
          this.query = to.query.query;
          this.searchLike(1, 3);
        }
      }
    },
    methods: {
      searchLike(startPage, pageSize, jumpPage) {
        api.searchLike({
          data: {
            name: this.query,
            pageSize: pageSize,
            startPage: startPage
          },
        }).then(res => {
          res.data.newsList.content.map(items => {
            items.hoverShow = false;
          });
          this.listData = res.data.newsList.content;
          this.pageCount = res.data.newsList.totalElements;
          if (!jumpPage) {
            this.startPage = 1
          }
        })
      },
      listHover(status, index) {
        this.listData[index].hoverShow = status;
      },
      pageChange(startPage) {
        this.searchLike(startPage, this.pageSize, true);
      },
    }
  }
</script>