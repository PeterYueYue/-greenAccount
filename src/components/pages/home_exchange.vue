<template>
  <div>
    <div class="ex_banner">
      <div class="banner" v-if="listImg.length > 0">
        <div class="banner_pic" v-for="item in listImg">
          <img :src="'https://www.greenfortune.sh.cn/banner/' + item.bname" alt="">
        </div>
      </div>
      <img src="@/assets/ex_banner.png" alt="" style="width:100%;" v-else>
    </div>
    <div class="ex_remind">
      <div class="ex_wrap marquee">
        <div><img src="@/assets/ex_icon_remind.png" alt="">{{message}}</div>
      </div>
    </div>
    <div class="ex_wrap">
      <div class="ex_list" @mouseenter.stop="listHover(false,index)" @mouseleave.stop="listHover(true,index)"
           v-for="(items,index) in listData" v-show="listData.length !== 0">
        <router-link :to="{path: '/exchange/detail/', query: { Did: items.productInfo.id }}">
          <img :src="'https://www.greenfortune.sh.cn/images/' + items.prodPic" alt="" class="ex_list_pic"
               v-if="items.prodPic">
          <img src="@/assets/ex_pic.png" alt="" class="ex_list_pic" v-else>
          <div class="ex_list_name">{{items.prodName}}</div>
          <div class="ex_list_score">{{items.prodPoints}}积分</div>
          <div class="ex_list_address">
            <img src="@/assets/ex_icon_address.png" alt="" v-if="items.hoverShow">
            <img src="@/assets/ex_icon_address_select.png" alt="" v-else>
            {{items.productInfo.prodReceiveAddress}}领取
          </div>
          <div class="ex_list_time" v-if="items.hoverShow">{{items.productInfo.prodProvider}}提供</div>
          <div class="ex_list_btn" v-else>立即兑换</div>
        </router-link>
      </div>
      <div class="ex_nodata" v-show="listData.length == 0">
        <img src="@/assets/icon_404.png" alt="">
        <div class="ex_blank">空空如也~</div>
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
  import {mapGetters} from 'vuex';
  import '@/assets/pages/exchange.css';
  import '@/components/common/pagination.css';

  export default {
    data() {
      return {
        listData: [],
        listImg: [],
        message: '',
        pageCount: 0,    //总条数
        pageSize: 8,     //每页条数
        startPage: 1,    //当前页
      }
    },
    mounted() {
      this.allList4NewStyle();
      this.getProductList(1, 8);
      this.bannerList();
    },
    watch: {
      area() {
        this.getProductList(1, 8);
        this.bannerList();
      }
    },
    computed: mapGetters({
      area: "area"
    }),
    methods: {
      allList4NewStyle() {
        api.allList4NewStyle({
          data: {
            category: "13",
          },
        }).then(res => {
          this.message = res.data.newsList.content[0].newsContent;
        })
      },
      getProductList(startPage, pageSize) {
        api.getProductList({
          data: {
            prodExchBrid: this.area.id,
            startPage: startPage,
            pageSize: pageSize,
          },
        }).then(res => {
          res.data.content.map(items => {
            items.hoverShow = true;
          });
          this.listData = res.data.content;
          this.pageCount = res.data.totalElements;
        })
      },
      pageChange(startPage) {
        this.getProductList(startPage, this.pageSize);
      },
      listHover(status, index) {
        this.listData[index].hoverShow = status;
      },
      bannerList() {
        api.getbannerList({
          "data": {
            prodExchBrid: this.area.id

          },
        }).then(res => {
          this.listImg = res.data
        })
      }
    }
  }
</script>