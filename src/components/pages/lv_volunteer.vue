<template>
  <div class="lv_wrap">
    <div class="lv_volunteer_bread">您的位置：绿互动 > <span>志愿者活动</span></div>
    <div class="lv_volunteer_tab" v-show="listData.length !== 0">
      <div class="lv_volunteer_list" v-for="(items) in listData">
        <router-link :to="{path: '/lv_volunteer_details/', query: { id: items[5] }}">
          <div class="title">{{items[1]}}</div>
          <div class="text"><img src="@/assets/lv_v_icon_heart.png" alt="" class="lv_volunteer_icon">{{items[6]}}<img
            src="@/assets/lv_v_icon_address.png" alt="" class="lv_volunteer_icon_address">{{items[2]}}
          </div>
          <div class="text">
            <img src="@/assets/lv_v_icon_date.png" alt="" class="lv_volunteer_icon">活动日期：{{items[3
            ]}}<span class="progress" v-show="items[4]==='进行中'">进行中</span><span class="finished" v-show="items[4]==='已结束'">已结束</span>
          </div>
        </router-link>
      </div>
    </div>

    <div class="lv_nodata" v-show="listData.length == 0">暂无数据</div>
    <pagination v-show="listData.length !== 0"></pagination>
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import '@/assets/pages/lv_volunteer.css';
  import pagination from '@/components/common/pagination.vue';

  export default {
    data() {
      return {
        listData: [],
      }
    },
    components: {pagination},
    mounted() {
      this.pubActList();
    },
    methods: {
      pubActList() {
        api.pubActList({
          data:{
            startPage:1,
            pageSize:10
          }
        }).then(res => {
          this.listData = res.data.pubActList.content;
        })
      },
    }
  }
</script>