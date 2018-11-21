<template>
  <div>
    <!--<bread></bread>-->
    <div class="ex_wrap de_shop">
      <div class="de_left">
        <img :src="'https://www.greenfortune.sh.cn/images/'+listData.imgUrl" alt="" class="de_shop_pic">
        <!--<div class="de_shop_reference">图片仅供参考，实际兑换礼品请以实物或您获取的服务为准</div>-->
      </div>
      <div class="de_shop_details">
        <div class="de_shop_details_name">{{listData.activityName}}</div>
        <div class="de_shop_details_remind">一份积分捐赠，一片公益爱心，感谢您的奉献</div>
        <div class="de_shop_details_price">爱心分值：<span>{{listData.leastPoints}}</span></div>
        <div class="de_shop_details_text">活动时间：{{listData.beginDateVo}} - {{listData.endDateVo}}</div>
        <!--<div class="de_shop_details_text">捐赠标准: 100积分（捐分标准：以100为基数，成倍叠加）</div>-->
        <div class="de_shop_details_text">主办单位：{{listData.organizer}}</div>
        <ul class="de_shop_details_btn_numbox">
          <li><span class="number">积分：</span></li>
          <li>
            <ul class="count">
              <li><span class="num-jian" @click="count(false)">-</span></li>
              <li><input type="number" class="input-num" v-model="productNum" disabled/></li>
              <li><span class="num-jia" @click="count(true)">+</span></li>
            </ul>
          </li>
          　　
        </ul>
        <div class="ex_shop_btn" @click="donatePointsSubmit" v-show="this.listData.status == '02'">我要捐赠</div>
        <div class="ex_shop_btn_hover" v-show="this.listData.status == '03'">活动已结束</div>
        <router-link to="/integral_list"><span class="ex_shop_more">查看更多爱心捐赠</span></router-link>
      </div>
    </div>

    <!-- Tab -->
    <div class="ex_wrap integral_tab">
      <ul>
        <li :class="{ cur: showUl }" @click="openUl(true)">爱心捐赠详情</li>
        <li :class="{ cur: !showUl }" @click="openUl(false)">爱心积分去向</li>
      </ul>
    </div>
    <div class="ex_wrap integral_content" v-show="showUl">
      <div class="integral_content_head">{{listData.activityInfo}}</div>
      <div class="integral_content_head">主办单位：{{listData.organizer}}</div>
      <div class="integral_content_head">活动时间：{{listData.beginDateVo}} - {{listData.endDateVo}}</div>
      <div class="integral_content_head">爱心企业：{{listData.caringEnterprise}}</div>
      <div class="integral_content_head">爱心礼包：{{listData.donateGoods}}</div>
      <div class="integral_content_head">慰问对象：{{listData.donateFor}}</div>
    </div>
    <div class="ex_wrap integral_content" v-show="!showUl">
      <div v-for="items in pointsDirectionData" class="points_wrap">
        <div class="title">{{items.createDate | moment}}<span>{{items.title}}</span></div>
        <div class="text">{{items.content}}</div>
        <img :src="'https://www.greenfortune.sh.cn/images/'+items.imgUrl" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  // import bread from '@/components/common/bread.vue';
  import {mapGetters} from 'vuex';
  import api from "@/api/api.js";
  import '@/assets/pages/exchange.css';
  import '@/assets/pages/ex_details.css';

  export default {
    data: function () {
      return {
        id: this.$route.query.id,
        listData: {},
        pointsDirectionData: [],
        productNum: 1,
        showUl: true,
      }
    },
    // components: {bread},
    computed: mapGetters({
      token: "token",
      isusername: "username",
      islogin: "user_islogin",
    }),
    mounted: function () {
      this.donateActivityDetail()
    },
    methods: {
      donateActivityDetail: function () {
        api.donateActivityDetail({
          data: {
            donateActivityId: this.id,
          },
        }).then(res => {
          this.listData = res.data.data.activityInfo;
          this.pointsDirectionData = res.data.data.pointsDirection;
          this.productNum = res.data.data.activityInfo.leastPoints;
          this.productAddNum = res.data.data.activityInfo.leastPoints;
        })
      },
      donatePointsSubmit: function () {
        if (!this.islogin) {
          this.$router.push({
            path: '/login?backUrl=integral_list'
          })
        }
        api.donatePoints({
          data: {
            donateActivityId: this.id,
            donatePoints: this.productNum,
          },
          token: this.token,
        }).then(res => {
          if (res.data.message !== '操作失败，用户未登录') {
            alert(res.data.message)
          }
          this.donateActivityDetail();
        })
      },
      openUl: function (type) {
        this.showUl = type;
      },
      count: function (status) {
        if (!status && this.productNum === 0) return;
        this.productNum = this.productNum === '' ? 0 : parseInt(this.productNum);
        status ? this.productNum += this.productAddNum : this.productNum -= this.productAddNum
      }
    }
  }
</script>