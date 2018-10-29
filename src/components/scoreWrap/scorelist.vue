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
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束日期：">
          <el-date-picker
            v-model="formInline.end"
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
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="score"
        label="交易分数">
        <template slot-scope="scope">
          <span>{{ scope.row.score }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
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
    data() {
      return {
        formInline: {
          start: '',
          end: '',
        },
        tableData: [{
          date: '2018-10-17',
          score: '20',
          type: '扫描',
        }, {
          date: '2018-10-17',
          score: '20',
          type: '扫描',
        }, {
          date: '2018-10-17',
          score: '20',
          type: '扫描',
        }],
        pointData: {},
        pageCount: 0,    //总条数
        pageSize: 5,     //每页条数
        startPage: 1,    //当前页
      }
    },
    computed: mapGetters({
      token: "token"
    }),
    mounted() {
      this.userGetInfo(1, 5);
      this.getPointOutDetail(1, 5);
      this.getPointInDetail(1, 5);
    },
    methods: {
      userGetInfo(startPage, pageSize) {
        api.userGetInfo({
          data: {
            startPage: startPage,
            pageSize: pageSize,
          },
          token: this.token,
        }).then(res => {
          this.pointData = res.data;
        })
      },
      getPointInDetail(startPage, pageSize) {
        api.getPointInDetail({
          data: {
            startDate: this.formInline.start,
            endDate: this.formInline.end,
            startPage: startPage,
            pageSize: pageSize,
          },
          token: this.token,
        }).then(res => {
          console.log(res);
          this.pageCount = res.data.totalElements;
        })
      },
      getPointOutDetail(startPage, pageSize) {
        api.getPointOutDetail({
          data: {
            startDate: this.formInline.start,
            endDate: this.formInline.end,
            startPage: startPage,
            pageSize: pageSize,
          },
          token: this.token,
        }).then(res => {
          // this.tableData = res.data.content;
          this.pageCount = res.data.totalElements;
        })
      },
      pageChange(startPage) {
        this.getPointOutDetail(startPage, this.pageSize);
      },
      search() {
        const params = {
          start: this.formInline.start,
          end: this.formInline.end,
        };
        // this.pageNow = 1;
        // if (this.showTable) {
        //   this.$refs.ordertable.getOrders(1, this.pageSize, params);
        // } else {
        //   this.$refs.CheckOrderTable.getOrders(1, this.pageSize, params);
        // }
      },
    }
  }
</script>

