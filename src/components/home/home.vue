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
            <activce-part></activce-part>
            <action-part></action-part>
            <other-part></other-part>
            <rank-part></rank-part>
            <video-part></video-part>    
        </div>
        <div class="map-contain">
            <map-part></map-part>
        </div>
        
    </div>
</template>

<script>
  import '@/assets/pages/home.css'
  import exchangePart from '@/components/home/homepartone.vue'
  import activcePart from '@/components/home/homeparttwo.vue'
  import actionPart from '@/components/home/homepartthree.vue'
  import rankPart from '@/components/home/homepartfour.vue'
  import videoPart from '@/components/home/homepartfive.vue'
  import mapPart from '@/components/home/homepartsix.vue'
  import otherPart from '@/components/home/homepartseven.vue'
  export default {
    components:{
        exchangePart,
        activcePart,
        actionPart,
        rankPart,
        videoPart,
        mapPart,
        otherPart
    },
    data() {
      return {
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
        lazyload:{
            one:false,
            two:false,
            three:false,
            four:false,
            five:false,
            six:false,
            seven:false
        }
      }
    },
    methods:{
        
    }
  }
</script>

