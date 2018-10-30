<template>
  <div class="change_wrap">
    6
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import {mapGetters} from 'vuex';
  import '@/components/changeWrap/commonNav/changenav.css';

  export default {
    data() {
      return {}
    },
    computed: mapGetters({
      token: "token"
    }),
    mounted() {
      this.productList();
    },
    methods: {
      productList() {
        api.productList({
          data: {
            orderStatus: "",
          },
          token: this.token,
        }).then(res => {

        })
      },
    }
  }
</script>

