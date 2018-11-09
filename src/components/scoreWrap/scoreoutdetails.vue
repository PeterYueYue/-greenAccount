<template>
  <div class="score_wrap">
    <div class="score_wrap_head">累计积分：<span class="score_wrap_head_num">{{pointData.totalPoint}}</span><span
      class="score_wrap_head_fen">分</span>消纳积分：<span class="score_wrap_head_num">{{pointData.elimPoint}}</span><span
      class="score_wrap_head_fen">分</span>可用积分：<span class="score_wrap_head_num">{{pointData.availPoint}}</span><span
      class="score_wrap_head_fen">分</span></div>

    <div class="score_search">
      <el-form :inline="true" :model="formInline">
        <el-form-item label="开始日期：">
          <el-date-picker
            v-model="formInline.start"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期：">
          <el-date-picker
            v-model="formInline.end"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button class="searchBtn" type="success" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="交易时间">
        <template slot-scope="scope">
          <span>{{ scope.row.tranTime | moment }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="score"
        label="交易分数">
        <template slot-scope="scope">
          <span>{{ scope.row.operatePoint }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
        <template slot-scope="scope">
          <span v-show="scope.row.tranType === '01'">扫描</span>
          <span v-show="scope.row.tranType === '02'">兑换</span>
          <span v-show="scope.row.tranType === '03'">补卡</span>
          <span v-show="scope.row.tranType === '04'">POS机交易</span>
          <span v-show="scope.row.tranType === '05'">积分转移</span>
          <span v-show="scope.row.tranType === '06'">积分失效</span>
          <span v-show="scope.row.tranType === '07'">积分调整</span>
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

  </div>
</template>
<script>
  import api from "@/api/api.js";
  import {mapGetters} from 'vuex';
  import '@/components/scoreWrap/commonNav/scorenav.css';
  import '@/components/common/pagination.css';

  export default {
    data:function() {
      return {
        formInline: {
          start: '',
          end: '',
        },
        tableData: [],
        pointData: {},
        pageCount: 0,    //总条数
        pageSize: 5,     //每页条数
        startPage: 1,    //当前页
      }
    },
    computed: mapGetters({
      token: "token"
    }),
    mounted:function() {
      this.userGetInfo();
    },
    methods: {
      userGetInfo:function() {
        api.userGetInfo({
          token: this.token,
        }).then(res => {
          this.pointData = res.data;
        })
      },
      getPointOutDetail:function(startPage, pageSize) {
        api.getPointOutDetail({
          data: {
            startDate: this.formInline.start,
            endDate: this.formInline.end,
            startPage: startPage,
            pageSize: pageSize,
          },
          token: this.token,
        }).then(res => {
          this.tableData = res.data.content;
          this.pageCount = res.data.totalElements;
        })
      },
      scrollToTop:function() {
        window.scrollTo(0,220);
      },
      pageChange:function(startPage) {
        this.getPointOutDetail(startPage, this.pageSize);
        this.scrollToTop();
      },
      search:function() {
        if (this.formInline.start == '' || this.formInline.end == '') {
          alert("请选择日期！")
        } else {
          this.getPointOutDetail(1, 5);
        }
      },
    }
  }
</script>

