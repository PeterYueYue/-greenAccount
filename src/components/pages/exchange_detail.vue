<template>
  <div>
    <!--<bread></bread>-->
    <div class="ex_wrap de_shop">
      <div class="de_left">
        <img :src="'https://www.greenfortune.sh.cn/images/'+listData.prodPic" alt="" class="de_shop_pic">
        <div class="de_shop_reference">图片仅供参考，实际兑换礼品请以实物或您获取的服务为准</div>
      </div>
      <div class="de_shop_details">
        <div class="de_shop_details_name">{{listData.prodName}}</div>
        <div class="de_shop_details_remind">备注：礼品兑换完成后请等待居委通知，接到通知后务必携带好本人绿色帐户卡至居委领取礼品</div>
        <div class="de_shop_details_price">礼品分值：<span>{{listData.prodPoints}}</span></div>
        <div class="de_shop_details_text">礼品编号：{{listData.prodCode}}</div>
        <div class="de_shop_details_text">兑换区域：{{listData.prodCreateUserBridName}}</div>
        <div class="de_shop_details_text">账户卡限定：{{listData.prodAccountTypeName}}</div>
        <div class="de_shop_details_text">领取方式：{{listData.prodReceiveAddress}}领取</div>
        <div class="de_shop_details_text">提供单位：{{listData.prodProvider}}</div>
        <ul class="de_shop_details_btn_numbox">
          <li><span class="number">数量：</span></li>
          <li>
            <ul class="count">
              <li><span class="num-jian" @click="count(false)">-</span></li>
              <li><input type="number" class="input-num" v-model="productNum"/></li>
              <li><span class="num-jia" @click="count(true)">+</span></li>
            </ul>
          </li>
          <li><span class="kucun">礼品剩余数量：{{listData.prodStockAmt}}</span></li>
          　　　
        </ul>
        <div class="ex_shop_btn" @click="ajaxCheckCanSubmit">立即兑换</div>
        <router-link to="/exchange"><span class="ex_shop_more">查看更多兑换礼品</span></router-link>
      </div>
    </div>
    <div class="ex_wrap de_center">
      <div>兑换礼品详情</div>
      <div>{{listData.prodInfo}}</div>
    </div>
    <div class="ex_wrap">
      <div class="de_title">同类兑换</div>
      <div class="ex_list" @mouseenter.stop="listHover(false,index)" @mouseleave.stop="listHover(true,index)"
           v-for="(items,index) in listSameData">
        <router-link :to="{path: '/exchange/detail/', query: { Did: items[5] }}">
          <img :src="'https://www.greenfortune.sh.cn/images/' + items[3]" alt="" class="ex_list_pic"
               v-if="items[3]">
          <img src="@/assets/ex_pic.png" alt="" class="ex_list_pic" v-else>
          <div class="ex_list_name">{{items[0]}}</div>
          <div class="ex_list_score">{{items[1]}}</div>
          <div class="ex_list_address">
            <img src="@/assets/ex_icon_address.png" alt="" v-if="items[7]">
            <img src="@/assets/ex_icon_address_select.png" alt="" v-else>
            {{items[6]}}领取
          </div>
          <div class="ex_list_time" v-if="items[7]">{{items[2]}}提供</div>
          <div class="ex_list_btn" v-else>立即兑换</div>
        </router-link>
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
    data() {
      return {
        Did: this.$route.query.Did,
        listData: {},
        listSameData: [],
        address: [],
        productNum: 1,
        receiveAddressId: ''
      }
    },
    // components: {bread},
    mounted() {
      this.getProductDetail()
    },
    computed: mapGetters({
      token: "token",
      resUuid: "resUuid",
      isusername: "username",
      islogin: "user_islogin",
      id: "id",
    }),
    methods: {
      getProductDetail() {
        api.getProductDetail({
          data: {
            id: this.Did,
          },
        }).then(res => {
          res.data.sameTypeLi.map(items => {
            items.push(true)
          });
          this.listData = res.data.info;
          this.$store.dispatch('getDetailsid', res.data.info);
          this.listSameData = res.data.sameTypeLi;
          if (res.data.info.prodStatus == '02') {
            alert("该商品已全部兑换完，无法继续兑换。");
            location.href = "/exchange#/exchange";
          }
          if (res.data.info.prodStatus == '03') {
            alert("该商品已下架，无法继续兑换。");
            location.href = "/exchange#/exchange";
          }
          if (res.data.info.prodStatus == '04') {
            alert("该商品未上架，无法继续兑换。");
            location.href = "/exchange#/exchange";
          }
          if (res.data.info.prodReceiveWay == '02') {
            api.getuserAddress({
              token: this.token,
            }).then(res => {
              this.address = res.data.address;
              if (res.data.address.length !== 0 && res.data.address[0].addressStatus == '1') {
                this.receiveAddressId = res.data.address[0].id
              }
            })
          }
        })
      },
      listHover(status, index) {
        this.listSameData[index].splice(7, 1);
        this.listSameData[index].push(status);
      },
      ajaxCheckCanSubmit() {
        if (!this.islogin) {
          this.$router.push('/login?backUrl=exchange/detail/?Did=' + this.id)
        }
        // if(this.address.length == 0){
        //   this.$router.push({
        //     path: '/lvzx/address',
        //   })
        // }
        api.ajaxCheckCanSubmit({
          data: {
            id: this.Did,
            productNum: this.productNum,
            receiveAddressId: this.receiveAddressId ? this.receiveAddressId : '',
            resUuid: this.resUuid
          },
          token: this.token,
        }).then(res => {
          alert(res.msg);
          if (res.msg == '操作成功！') {
            this.$router.push({
              path: '/my_change/all',
            })
          }
          if (res.msg == '请重新登录') {
            this.$router.push('/login?backUrl=exchange/detail/?Did=' + this.id)
          }
        })
      },
      count(status) {
        if (!status && this.productNum === 0) return
        this.productNum = this.productNum === '' ? 0 : parseInt(this.productNum);
        status ? this.productNum += 1 : this.productNum -= 1
      }
    }
  }
</script>