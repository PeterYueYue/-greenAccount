<template>
  <div class="info-base">
    123
  </div>
</template>
<script>
  import api from "@/api/api.js";
  import {mapGetters} from 'vuex';

  export default {
    data() {
      return {}
    },
    computed: mapGetters({
      token: "token"
    }),
    mounted() {

    }
  }
</script>

