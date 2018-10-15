<template>
  <div class="lv_wrap">
    <div class="lv_volunteer_bread">您的位置：绿互动 > <span>志愿者活动</span></div>
    <div class="lv_volunteer_tab">
      <router-link to="/lv_volunteer_details">
        <div class="lv_volunteer_list">
          <div class="title">公园捡拾垃圾关爱环境</div>
          <div class="text"><img src="@/assets/lv_v_icon_heart.png" alt="" class="lv_volunteer_icon">义工服务队<img
            src="@/assets/lv_v_icon_address.png" alt="" class="lv_volunteer_icon_address">宝山区
          </div>
          <div class="text"><img src="@/assets/lv_v_icon_date.png" alt="" class="lv_volunteer_icon">活动日期：2018.09
            .02至2018.10.20<span class="progress">进行中</span></div>
        </div>
      </router-link>
      <div class="lv_volunteer_list">
        <div class="title">公园捡拾垃圾关爱环境</div>
        <div class="text"><img src="@/assets/lv_v_icon_heart.png" alt="" class="lv_volunteer_icon">义工服务队<img
          src="@/assets/lv_v_icon_address.png" alt="" class="lv_volunteer_icon_address">宝山区
        </div>
        <div class="text"><img src="@/assets/lv_v_icon_date.png" alt="" class="lv_volunteer_icon">活动日期：2018.09
          .02至2018.10.20<span class="progress">进行中</span></div>
      </div>
      <div class="lv_volunteer_list">
        <div class="title">公园捡拾垃圾关爱环境</div>
        <div class="text"><img src="@/assets/lv_v_icon_heart.png" alt="" class="lv_volunteer_icon">义工服务队<img
          src="@/assets/lv_v_icon_address.png" alt="" class="lv_volunteer_icon_address">宝山区
        </div>
        <div class="text"><img src="@/assets/lv_v_icon_date.png" alt="" class="lv_volunteer_icon">活动日期：2018.09
          .02至2018.10.20<span class="finished">已结束</span></div>
      </div>
    </div>

    <pagination></pagination>
  </div>
</template>
<script>
  import '@/assets/pages/lv_volunteer.css';
  import pagination from '@/components/common/pagination.vue';

  export default {
    data() {
      return {}
    },
    components: {pagination},
    methods: {}
  }
</script>