<template>
  <div>
    <div class="ex_wrap">
      <div class="ex_list ex_list_integral" v-for="items in listData">
        <router-link :to="{path: '/integral_detail/', query: { id: items.id }}">
          <img :src="items.imgUrl" alt="" class="ex_list_pic" v-if="items.imgUrl">
          <img src="@/assets/ex_pic.png" alt="" class="ex_list_pic" v-else>
          <div class="ex_list_name">{{items.activityName}}</div>
          <div class="ex_list_score">{{items.leastPoints}}积分</div>
          <div class="ex_list_address">活动时间：{{items.beginDateVo}} - {{items.endDateVo}}</div>
          <div class="ex_list_btn_integral">我要捐赠</div>
        </router-link>
      </div>
    </div>
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
  import '@/assets/pages/exchange.css';
  import '@/components/common/pagination.css';

  export default {
    name: 'integralList',
    data:function() {
      return {
        listData: [],
        pageCount: 0,    //总条数
        pageSize: 8,     //每页条数
        startPage: 1,    //当前页
      }
    },
    mounted:function() {
      this.donateActivityPage(1, 8);
    },
    methods: {
      donateActivityPage:function(startPage, pageSize) {
        api.donateActivityPage({
          data: {
            startPage: startPage,
            pageSize: pageSize,
          },
        }).then(res => {
          this.listData = res.data.content;
          this.pageCount = res.data.totalElements;
        })
      },
      pageChange:function(startPage) {
        this.donateActivityPage(startPage, this.pageSize);
      },
    }
  }
</script>