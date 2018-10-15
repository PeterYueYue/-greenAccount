<template>
  <div>
    <img src="@/assets/ex_banner.png" alt="" class="ex_banner">
    <div class="ex_remind">
      <div class="ex_wrap marquee">
        <div><img src="@/assets/ex_icon_remind.png" alt="">
          上海绿色账户平台维护公告 亲爱的市民朋友：上海绿色账户平台维护公告 亲爱的市民朋友：上海绿色账户平台维护公告 亲爱的市民朋友：上海绿色账户平台维护公告 亲爱的市民朋友：上海绿色账户平台维护公告
          亲爱的市民朋友：上海绿色账户平台维护公告 亲爱的市民朋友：上海绿色账户平台维护公告 亲爱的市民朋友：
        </div>
      </div>
    </div>
    <div class="ex_wrap">
      <div class="ex_list" @mouseenter.stop="listHover(false,index)" @mouseleave.stop="listHover(true,index)"
           v-for="(items,index) in listData">
        <router-link :to="{path: '/exchange/detail/', query: { id: items.productInfo.id }}">
          <img :src="'https://www.greenfortune.sh.cn/images/' + items.prodPic" alt="" class="ex_list_pic"
               v-if="items.prodPic">
          <img src="@/assets/ex_pic.png" alt="" class="ex_list_pic" v-else>
          <div class="ex_list_name">{{items.prodName}}</div>
          <div class="ex_list_score">{{items.prodPoints}}</div>
          <div class="ex_list_address">
            <img src="@/assets/ex_icon_address.png" alt="" v-if="items.hoverShow">
            <img src="@/assets/ex_icon_address_select.png" alt="" v-else>
            {{items.productInfo.prodReceiveAddress}}领取
          </div>
          <div class="ex_list_time" v-if="items.hoverShow">{{items.productInfo.prodProvider}}提供</div>
          <div class="ex_list_btn" v-else>立即兑换</div>
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
    data() {
      return {
        listData: []
      }
    },
    components: {pagination},
    mounted() {
      this.getProductList();
    },
    methods: {
      getProductList() {
        api.getProductList({
          data: {
            "prodExchBrid": "310000000000",
          },
        }).then(res => {
          res.data.map(items => {
            items.hoverShow = true;
          });
          this.listData = res.data;
        })
      },
      listHover(status, index) {
        this.listData[index].hoverShow = status;
      },
    }
  }
</script>