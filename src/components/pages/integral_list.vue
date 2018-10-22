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
    <pagination></pagination>
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import '@/assets/pages/exchange.css';
  import pagination from '@/components/common/pagination.vue';

  export default {
    name: 'integralList',
    data() {
      return {
        listData: [],
      }
    },
    components: {pagination},
    mounted() {
      this.donateActivityPage();
    },
    methods: {
      donateActivityPage() {
        api.donateActivityPage({
          data: {
            "startPage": 1,
            "pageSize": 6,
          },
        }).then(res => {
          this.listData = res.data.content;
        })
      },
    }
  }
</script>