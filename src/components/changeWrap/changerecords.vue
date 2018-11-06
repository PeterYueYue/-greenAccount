<template>
  <div class="change_wrap">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        width="180"
        prop="number"
        label="序号">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="180"
        prop="name"
        label="活动名称">
        <template slot-scope="scope">
          <span>{{ scope.row.activityName }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="score"
        label="消纳物品">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="score"
        label="消纳数量">
        <template slot-scope="scope">
          <span>{{ scope.row.count }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="score"
        label="消纳积分">
        <template slot-scope="scope">
          <span>{{ scope.row.point }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="date"
        label="兑换时间">
        <template slot-scope="scope">
          <span>{{ scope.row.orderCode | momentYear }}</span>
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
  import '@/components/changeWrap/commonNav/changenav.css';
  import '@/components/common/pagination.css';

  export default {
    data() {
      return {
        tableData: [],
        pageCount: 0,    //总条数
        pageSize: 5,     //每页条数
        startPage: 1,    //当前页
      }
    },
    computed: mapGetters({
      token: "token"
    }),
    mounted() {
      this.productActivityHistory(1, 5);
    },
    methods: {
      productActivityHistory(startPage, pageSize) {
        api.productActivityHistory({
          data: {
            startPage: startPage,
            pageSize: pageSize,
          },
          token: this.token,
        }).then(res => {
          this.tableData = res.data.content;
          this.pageCount = res.data.totalElements;
        })
      },
      pageChange(startPage) {
        this.productActivityHistory(startPage, this.pageSize);
      },
    }
  }
</script>

