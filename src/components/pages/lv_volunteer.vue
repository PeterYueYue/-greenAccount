<template>
  <div class="lv_wrap">
    <div class="lv_volunteer_bread">您的位置：绿互动 > <span>志愿者活动</span></div>
    <div class="lv_volunteer_tab" v-show="listData.length !== 0">
      <div class="lv_volunteer_list" v-for="(items,index) in listData" @mouseenter.stop="listHover(false,index)" @mouseleave.stop="listHover(true,index)" :key="index">
        <router-link tag="a" target="_blank" :to="{path: '/lv_volunteer_details/', query: { id: items[5] }}">
          <div class="title">{{items[1]}}</div>
          <div class="text"><img src="@/assets/lv_v_icon_heart.png" alt="" class="lv_volunteer_icon" v-if="items[7]">
            <img src="@/assets/lv_v_icon_heart_select.png" alt="" class="lv_volunteer_icon" v-else>{{items[6]}}<img
            src="@/assets/lv_v_icon_address.png" alt="" class="lv_volunteer_icon_address" v-if="items[7]"><img
              src="@/assets/lv_v_icon_address_select.png" alt="" class="lv_volunteer_icon_address" v-else>{{items[2]}}
          </div>
          <div class="text">
            <img src="@/assets/lv_v_icon_date.png" alt="" class="lv_volunteer_icon" v-if="items[7]"><img src="@/assets/lv_v_icon_date_select.png" alt="" class="lv_volunteer_icon" v-else>活动日期：{{items[3
            ]}}<span class="progress" v-show="items[4]==='进行中'">进行中</span>
            <span class="progress" v-show="items[4]==='未开始'">未开始</span>
            <span class="enlist" v-show="items[4]==='报名中'">报名中</span>
            <span class="finished" v-show="items[4]==='已结束'">已结束</span>
          </div>
        </router-link>
      </div>
    </div>

    <div class="lv_v_nodata" v-show="listData.length == 0">
      <img src="@/assets/icon_404.png" alt="">
      <div class="lv_v_blank">空空如也~</div>
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
  import '@/assets/pages/lv_volunteer.css';
  import '@/components/common/pagination.css';

  export default {
    data:function() {
      return {
        listData: [],
        pageCount: 0,    //总条数
        pageSize: 8,     //每页条数
        startPage: 1,    //当前页
      }
    },
    mounted:function() {
      this.pubActList(1,8);
    },
    methods: {
      pubActList:function(startPage, pageSize) {
        api.pubActList({
          data:{
            startPage: startPage,
            pageSize: pageSize,
          }
        }).then(res => {
	        res.data.pubActList.content.map(items => {
		        items.push(true);
	        });
          this.listData = res.data.pubActList.content;
          this.pageCount = res.data.pubActList.totalElements;
        })
      },
      scrollToTop:function() {
        window.scrollTo(0,0);
      },
      pageChange:function(startPage) {
        this.pubActList(startPage, this.pageSize);
        this.scrollToTop();
      },
	    listHover:function(status, index) {
		    this.listData[index].pop();
		    this.listData[index].push(status)
	    },
    }
  }
</script>