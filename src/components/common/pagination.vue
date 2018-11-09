<template>
  <div class="pagination_wrap">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data:function() {
      return {}
    },
  }
</script>
<style>
  .pagination_wrap {
    text-align: center;
    margin-top: 80px;
  }

  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #52B54B !important;
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #52B54B !important;
    color: #fff !important;
  }

  .el-pager li:hover {
    color: #52B54B !important;
  }

  .el-pager li.active {
    color: #52B54B !important;
    cursor: default !important;
  }
</style>