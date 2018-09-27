<template>
    <div class="home-contain">
        <div class="banner-contain">
            <md-card>
                <md-card-media>
                <!-- swiper -->
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
                </md-card-media>
            </md-card>
        </div>
    </div>
</template>

<script>
import '@/assets/pages/home.css'
  export default {
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
        }
      }
    }
  }
</script>

