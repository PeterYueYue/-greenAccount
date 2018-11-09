<template>
  <div class="score_wrap">
    <div class="score_wrap_head">累计积分：<span class="score_wrap_head_num">{{pointData.totalPoint}}</span><span
      class="score_wrap_head_fen">分</span>消纳积分：<span class="score_wrap_head_num">{{pointData.elimPoint}}</span><span
      class="score_wrap_head_fen">分</span>可用积分：<span class="score_wrap_head_num">{{pointData.availPoint}}</span><span
      class="score_wrap_head_fen">分</span></div>
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import {mapGetters} from 'vuex';
  import '@/components/scoreWrap/commonNav/scorenav.css';

  export default {
    data:function() {
      return {
        pointData: {},
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
    }
  }
</script>

