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
          <span>{{ scope.row.number }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="code"
        label="二维码">
        <template slot-scope="scope">
          <img src="@/assets/ex_pic.png" alt="" class="change_table_code">
        </template>
      </el-table-column>
      <el-table-column
        prop="pic"
        label="商品图片">
        <template slot-scope="scope">
          <img src="@/assets/ex_pic.png" alt="" class="change_table_pic">
        </template>
      </el-table-column>
      <el-table-column
        width="180"
        prop="name"
        label="商品名称">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="score"
        label="消费积分">
        <template slot-scope="scope">
          <span>{{ scope.row.score }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="changema"
        label="兑换码">
        <template slot-scope="scope">
          <span>{{ scope.row.changema }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="兑换时间">
        <template slot-scope="scope">
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="订单状态">
        <template slot-scope="scope">
          <span>{{ scope.row.status }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="getFeed(scope.row.id)" type="text" size="small">用户反馈</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination_wrap">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="10"
        :page-size="5">
      </el-pagination>
    </div>


    <!-- 弹窗 -->
    <div class="change_shadow" v-if="showShadow"></div>
    <!-- 取消理由弹窗 -->
    <div class="change_shadow_box" v-if="showBox">
      <img src="@/assets/lv_v_icon_close.png" alt="" class="lv_volunteer_icon_close" @click="closeBox">
      <div class="title">用户反馈</div>
      <div class="rules">
        <div class="name">订单号:</div>
        <div class="content">010720180822000180</div>
      </div>
      <div class="rules">
        <div class="name">兑换时间:</div>
        <div class="content">2018.09.12</div>
      </div>
      <div class="rules">
        <div class="name">商品名称:</div>
        <div class="content">绿色账户抵用券</div>
      </div>
      <div class="rules">
        <div class="name">商品图片:</div>
        <div class="content"><img src="@/assets/ex_pic.png" alt="" class="change_table_pic"></div>
      </div>
      <div class="rules">
        <div class="name">用户反馈:</div>
        <div class="content">
          <el-radio-group v-model="feedData">
            <el-radio-button label="满意" class="change_table_radio"></el-radio-button>
            <el-radio-button label="一般" class="change_table_radio"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="rules_btn" @click="saveData">提交</div>
    </div>
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import {mapGetters} from 'vuex';
  import '@/components/changeWrap/commonNav/changenav.css';
  import '@/components/common/pagination.css';

  export default {
    data() {
      return {
        tableData: [{
          number: '010720180822000180',
          name: '滨江森林公园门票',
          score: '800',
          changema: '普通兑换',
          date: '2018.08.12',
          status: '待领取',
        }, {
          number: '010720180822000180',
          name: '滨江森林公园门票',
          score: '800',
          changema: '普通兑换',
          date: '2018.08.12',
          status: '已领取',
        }],
        showShadow: false,
        showBox: false,
        feedData: '满意',
        pageCount: 0,    //总条数
        pageSize: 8,     //每页条数
        startPage: 1,    //当前页
      }
    },
    computed: mapGetters({
      token: "token"
    }),
    mounted() {

    },
    methods: {
      getFeed() {
        this.showShadow = true;
        this.showBox = true;
        document.querySelector('body').style.overflow = 'hidden';

      },
      saveData() {
        alert(1);
      },
      closeBox() {
        this.showShadow = false;
        this.showBox = false;
        document.querySelector('body').style.overflow = 'auto';
      },
    }
  }
</script>

