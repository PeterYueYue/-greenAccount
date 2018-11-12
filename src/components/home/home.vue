<template>
  <div class="home-contain">
    <div class="banner-contain">
      <swiper :options="swiperOption">
        <swiper-slide>
          <img class="banner-img" src="@/assets/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="banner-img" src="@/assets/banner.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img class="banner-img" src="@/assets/banner.png" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="part-contain">
      <exchange-part></exchange-part>
      <activce-part :scroll="scroll"></activce-part>
      <action-part :scroll="scroll"></action-part>
      <other-part :scroll="scroll"></other-part>
      <rank-part :scroll="scroll"></rank-part>
      <video-part :scroll="scroll"></video-part>
    </div>
    <div class="map-contain">
      <map-part :scroll="scroll"></map-part>
    </div>

  </div>
</template>

<script>
  import '@/assets/pages/home.css'
  import $ from 'jquery'
  import api from "@/api/api.js";
  import {mapGetters} from 'vuex'
  import exchangePart from '@/components/home/homepartone.vue'
  import activcePart from '@/components/home/homeparttwo.vue'
  import actionPart from '@/components/home/homepartthree.vue'
  import rankPart from '@/components/home/homepartfour.vue'
  import videoPart from '@/components/home/homepartfive.vue'
  import mapPart from '@/components/home/homepartsix.vue'
  import otherPart from '@/components/home/homepartseven.vue'

  export default {
    components: {
      exchangePart,
      activcePart,
      actionPart,
      rankPart,
      videoPart,
      mapPart,
      otherPart
    },
    data: function () {
      return {
        scroll: 0,
        comlist: {
          active: false,
          action: false,
          rank: false,
          video: false,
          map: false,
          other: false
        },
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        lazyload: {
          one: false,
          two: false,
          three: false,
          four: false,
          five: false,
          six: false,
          seven: false
        }
      }
    },
    created: function () {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.onbeforeunload = function () {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    },
    computed: mapGetters({
      isArea: "area",
      isusername: "username",
      islogin: "user_islogin"
    }),
    mounted: function () {
      window.addEventListener('scroll', this.page);
      this.bannerList();
    },
    methods: {
      page: function () {
        this.scroll += 1;
        if (this.scroll == 2) {
          // console.log(document.querySelector('.home-exchange-contain'))
          // document.querySelector('.home-exchange-contain').scrollIntoView()
          // document.documentElement.scrollTop=$('.home-exchange-content').offset().top;
        }
        // document.documentElement.scrollTop=500

        // console.log(document.documentElement.scrollTop)
      },
      bannerList: function () {
        api.getbannerList({
          "data": {
            prodExchBrid: this.isArea.id

          },
        }).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

