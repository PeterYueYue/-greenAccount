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
           v-for="(items,index) in listData" @click="jumpDetails">
        <img src="@/assets/ex_pic.png" alt="" class="ex_list_pic">
        <div class="ex_list_name">{{items.name}}</div>
        <div class="ex_list_score">{{items.score}}</div>
        <div class="ex_list_address">
          <img src="@/assets/ex_icon_address.png" alt="" v-if="items.hoverShow">
          <img src="@/assets/ex_icon_address_select.png" alt="" v-else>
          {{items.member}}
        </div>
        <div class="ex_list_time" v-if="items.hoverShow">{{items.tips}}</div>
        <div class="ex_list_btn" v-else>立即兑换</div>
      </div>
    </div>
    <pagination></pagination>
  </div>
</template>
<script>
  import '@/assets/pages/exchange.css';
  import pagination from '@/components/common/pagination.vue';

  export default {
    data() {
      return {
        listData: [{
          name: '上海xxxxx公园',
          score: '100积分',
          member: 'xxxx街道小区垃圾分拣员',
          tips: '居委会领取 上海市绿化市容局提供',
          hoverShow: true
        }, {
          name: '上海xxxxx公园',
          score: '100积分',
          member: 'xxxx街道小区垃圾分拣员',
          tips: '居委会领取 上海市绿化市容局提供',
          hoverShow: true
        }, {
          name: '上海xxxxx公园',
          score: '100积分',
          member: 'xxxx街道小区垃圾分拣员',
          tips: '居委会领取 上海市绿化市容局提供',
          hoverShow: true
        }, {
          name: '上海xxxxx公园',
          score: '100积分',
          member: 'xxxx街道小区垃圾分拣员',
          tips: '居委会领取 上海市绿化市容局提供',
          hoverShow: true
        }, {
          name: '上海xxxxx公园',
          score: '100积分',
          member: 'xxxx街道小区垃圾分拣员',
          tips: '居委会领取 上海市绿化市容局提供',
          hoverShow: true
        }]
      }
    },
    components: {pagination},
    methods: {
      listHover(status, index) {
        this.listData[index].hoverShow = status
      },
      jumpDetails() {
        this.$router.push({
          path: '/exchange/detail'
        })
      },
    }
  }
</script>