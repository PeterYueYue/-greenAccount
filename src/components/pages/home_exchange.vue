<template>
  <div>
    <div class="ex_banner">
      <swiper :options="swiperOption" v-if="listImg.length > 0">
        <swiper-slide v-for="(item,index) in listImg" :key="index">
          <img :src="'https://www.greenfortune.sh.cn/banner/' + item.bname" alt="" class="ex_banner_pic">
        </swiper-slide>
      </swiper>
      <img src="@/assets/ex_banner.png" alt="" style="width:100%;display:block" v-else>
    </div>
    <div class="ex_remind">
      <div class="ex_wrap marquee">
        <div><img src="@/assets/ex_icon_remind.png" alt="">{{message}}</div>
      </div>
    </div>
    <div class="ex_wrap">
      <div class="ex_list"
           v-for="(items,index) in listData" v-show="listData.length !== 0" :key="index">
        <router-link :to="{path: '/exchange/detail/', query: { Did: items.productInfo.id }}">
          <img :src="'https://www.greenfortune.sh.cn/images/' + items.prodPic" alt="" class="ex_list_pic"
               v-if="items.prodPic">
          <img src="@/assets/ex_pic.png" alt="" class="ex_list_pic" v-else>
          <div class="ex_list_name">{{items.prodName}}</div>
          <div class="ex_list_score">{{items.prodPoints}}积分</div>
          <div class="ex_list_address">
            <img src="@/assets/ex_icon_address.png" alt="">
            {{items.productInfo.prodReceiveAddress}}领取
          </div>
          <div class="ex_list_time">{{items.productInfo.prodProvider}}提供</div>
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
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    data() {
      return {
        listData: [],
        listImg: [],
        message: '',
        pageCount: 0,      //总条数
        pageSize: 12,      //每页条数
        startPage: 1,      //当前页
        swiperOption: {
          loop: true,
          autoplay: {
            delay: 1000, //自动切换的时间间隔，单位ms
            stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
            stopOnLastSlide: true, //如果设置为true，当切换到最后一个slide时停止自动切换。
            disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
            reverseDirection: false, //开启反向自动轮播。
            waitForTransition: true, //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
          },
          speed: 1000,
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted() {
      this.allList4NewStyle();
      this.getProductList(1, 12);
      this.bannerList();
    },
    watch: {
      area() {
        this.allList4NewStyle();
        this.getProductList(1, 12);
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
          this.listData = res.data.content;
          this.pageCount = res.data.totalElements;
        })
      },
      scrollToTop() {
        window.scrollTo(0, 0);
      },
      pageChange(startPage) {
        this.getProductList(startPage, this.pageSize);
        this.scrollToTop();
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