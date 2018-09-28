<template>
  <div>
    <!--<bread></bread>-->
    <div class="ex_wrap de_shop">
      <div class="de_left">
        <img src="@/assets/ex_pic2.png" alt="" class="de_shop_pic">
        <div class="de_shop_reference">图片仅供参考，实际兑换礼品请以实物或您获取的服务为准</div>
      </div>
      <div class="de_shop_details">
        <div class="de_shop_details_name">舒肤佳香皂3块装</div>
        <div class="de_shop_details_remind">备注：礼品兑换完成后请等待居委通知，接到通知后务必携带好本人绿色帐户卡至居委领取礼品</div>
        <div class="de_shop_details_price">礼品分值：<span>300</span></div>
        <div class="de_shop_details_text">礼品编号：P00020140901003</div>
        <div class="de_shop_details_text">兑换区域：上海市</div>
        <div class="de_shop_details_text">账户卡限定：不限制</div>
        <div class="de_shop_details_text">领取方式：居委领取</div>
        <div class="de_shop_details_text">提供单位：上海市绿化市容局</div>
        <ul class="de_shop_details_btn_numbox">
          <li><span class="number">数量：</span></li>
          <li>
            <ul class="count">
              <li><span class="num-jian">-</span></li>
              <li><input type="number" class="input-num" value="0"/></li>
              <li><span class="num-jia">+</span></li>
            </ul>
          </li>
          <li><span class="kucun">剩余：4204</span></li>　　　
        </ul>
        <div class="ex_shop_btn">立即兑换</div><router-link to="/exchange"><span class="ex_shop_more">查看更多兑换礼品</span></router-link>
      </div>
    </div>
    <div class="ex_wrap de_center">
      <div>兑换礼品详情</div>
      <div>尚岛宜家清洁木棒棉签，100只实惠装。（不含荧光剂，使用更安全）</div>
    </div>
    <div class="ex_wrap">
      <div class="de_title">同类兑换</div>
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
  </div>
</template>
<script>
  // import bread from '@/components/common/bread.vue'
  import '@/assets/pages/exchange.css';
  import '@/assets/pages/ex_details.css';

  export default {
    data() {
      return {
        listData: [{
          name: '上海xxxxx公园',
          score: '100积分',
          member: 'xxxx街道小区垃圾分拣员',
          tips: '居委会领取 上海市绿化市容局提供',
          hoverShow: true
        },{
          name: '上海xxxxx公园',
          score: '100积分',
          member: 'xxxx街道小区垃圾分拣员',
          tips: '居委会领取 上海市绿化市容局提供',
          hoverShow: true
        }]
      }
    },
    // components: {bread},
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