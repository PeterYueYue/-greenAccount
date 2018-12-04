<template>
  <div class="change_wrap">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        width="180"
        prop="number"
        label="订单编号">
        <template slot-scope="scope">
          <span>{{ scope.row.orderCode }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="code"
        label="二维码">
        <template slot-scope="scope">
          <span style="cursor: pointer" v-show="scope.row.companyCode == '0003' && scope.row.prodExchgeAddress!='null' "
                @mouseenter.stop="codeHover(true,scope.$index)"
                @mouseleave.stop="codeHover(false,scope.$index)">[▨]</span>
          <qrcode :value="scope.row.prodExchgeAddress" :options="{ size: 85 }" class="erweima"
                  v-show="(scope.row.companyCode == '0003' && scope.row.prodExchgeAddress!='null') && scope.row.showErweima"></qrcode>
        </template>
      </el-table-column>
      <el-table-column
        prop="pic"
        label="商品图片">
        <template slot-scope="scope">
          <img :src="'https://www.greenfortune.sh.cn/images/' + scope.row.prodPicPath" alt="" class="change_table_pic">
        </template>
      </el-table-column>
      <el-table-column
        width="180"
        prop="name"
        label="商品名称">
        <template slot-scope="scope">
          <router-link :to="{path: '/exchange/detail/', query: { Did: scope.row.prodId }}"><span>{{ scope.row.prodInfo
            }}</span></router-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="score"
        label="消费积分">
        <template slot-scope="scope">
          <span>{{ scope.row.prodTotalPoint }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="changema"
        label="兑换码">
        <template slot-scope="scope">
          <span v-show="scope.row.goodCode == 'null'">普通兑换</span>
          <span v-show="scope.row.goodCode !== 'null'">{{ scope.row.goodCode }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="150"
        prop="date"
        label="兑换时间">
        <template slot-scope="scope">
          <span>{{ scope.row.order_time | moment }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="订单状态">
        <template slot-scope="scope">
          <span v-show="scope.row.order_status === '01'">待领取</span>
          <span v-show="scope.row.order_status === '02'">已领取</span>
          <span v-show="scope.row.order_status === '03'">未开奖</span>
          <span v-show="scope.row.order_status === '04'">已开奖</span>
          <span v-show="scope.row.order_status === '05'">已失效</span>
          <span v-show="scope.row.order_status === '06'">已取消</span>
          <span v-show="scope.row.order_status === '10'">已中奖</span>
          <span v-show="scope.row.order_status === '11'">未中奖</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="getFeed(scope.row.prodId,scope.row.orderCode)" type="text" size="small"
                     v-show="scope.row.order_status == '02'">用户反馈
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination_wrap">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pageCount"
        :page-size="pageSize"
        @current-change="pageChange"
        :current-page.sync="startPage"
        v-show="tableData.length !== 0">
      </el-pagination>
    </div>

    <!-- 弹窗 -->
    <div class="change_shadow" v-if="showShadow">
      <div class="change_shadow_box" v-if="showBox">
      <img src="@/assets/lv_v_icon_close.png" alt="" class="lv_volunteer_icon_close" @click="closeBox">
      <div class="title">用户反馈</div>
      <div class="rules">
        <div class="name">订单号:</div>
        <div class="content">{{shadowData.orderCode}}</div>
      </div>
      <div class="rules">
        <div class="name">兑换时间:</div>
        <div class="content">{{shadowData.creatTime | momentYear}}</div>
      </div>
      <div class="rules">
        <div class="name">商品名称:</div>
        <div class="content">{{shadowData.prodName}}</div>
      </div>
      <div class="rules">
        <div class="name">商品图片:</div>
        <div class="content"><img :src="'https://www.greenfortune.sh.cn/images/' + shadowData.prodPic" alt=""
                                  class="change_table_pic"></div>
      </div>
      <div class="rules">
        <div class="name">用户反馈:</div>
        <div class="content">
          <el-radio-group v-model="feedData">
            <el-radio-button :label="item.sortNo" class="change_table_radio"
                             v-for="(item,index) in itemList" :key="index">{{item.contents}}
            </el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="rules_btn" @click="saveData">提交</div>
    </div>
    </div>
    <!-- 取消理由弹窗 -->
    
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import {mapGetters} from 'vuex';
  import '@/components/changeWrap/commonNav/changenav.css';
  import '@/components/common/pagination.css';

  export default {
    data:function() {
      return {
        tableData: [],
        itemList: [],
        shadowData: {},
        showShadow: false,
        showBox: false,
        showErweima: false,
        orderCode: '',
        feedData: '',
        pageCount: 0,    //总条数
        pageSize: 5,     //每页条数
        startPage: 1,    //当前页
      }
    },
    computed: mapGetters({
      token: "token"
    }),
    mounted:function() {
      this.productList(1, 5);
    },
    methods: {
      productList:function(startPage, pageSize) {
        api.productList({
          data: {
            orderStatus: "",
            startPage: startPage,
            pageSize: pageSize,
          },
          token: this.token,
        }).then(res => {
          this.tableData = res.data.productOrderVOs.content.map(items => {
            return Object.assign(items, {'showErweima': false})
          });
          this.pageCount = res.data.productOrderVOs.totalElements;
        })
      },
      scrollToTop:function() {
        window.scrollTo(0,0);
      },
      pageChange:function(startPage) {
        this.productList(startPage, this.pageSize);
        this.scrollToTop();
      },
      getFeed:function(prodId, orderCode) {
        this.orderCode = orderCode;
        api.productFeedbackInit({
          data: {
            id: prodId,
            orderCode: orderCode
          },
          token: this.token,
        }).then(res => {
          let getFlag = res.data.itemList.filter(item => {
            return item.flag > 0
          });
          this.feedData = getFlag.length > 0 ? getFlag[0].sortNo : '';
          this.shadowData = res.data;
          this.itemList = res.data.itemList;
          this.showShadow = true;
          this.showBox = true;
          // document.querySelector('body').style.overflow = 'hidden';
        })
      },
      saveData:function() {
        api.productFeedbackSave({
          data: {
            items: this.feedData,
            orderCode: this.orderCode
          },
          token: this.token,
        }).then(res => {
          alert(res.msg);
          this.showShadow = false;
          this.showBox = false;
          // document.querySelector('body').style.overflow = 'auto';
        })
      },
      closeBox:function() {
        this.showShadow = false;
        this.showBox = false;
        document.querySelector('body').style.overflow = 'auto';
      },
      codeHover:function(status, index) {
        this.tableData[index].showErweima = status;
      },
    }
  }
</script>

