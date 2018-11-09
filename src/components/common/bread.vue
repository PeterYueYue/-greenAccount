<template>
  <div class="bread_wrap">
    <span class="bread_name">您的位置</span>
    <span v-for="items in breadName" @click="jump(items.path)" class="bread_nav">{{items.name ? ' > ' + items.name : ''}}</span>
  </div>
</template>
<script>
	export default{
		data:function(){
			return {
				breadName: []
			}
		},
		mounted:function(){
			this.breadName = this.$route.matched
		},
		methods: {
			jump(url){
				this.$router.push(url)
			}
		},
		watch: {
			$route(v){
				this.breadName = v.matched
			}
		}
	}
</script>
<style>
  .bread_wrap {
    width: 1280px;
    margin: 20px auto 0;
  }

  .bread_name {
    font-size: 12px;
    color: #333;
  }

  .bread_nav {
    font-size: 12px;
    color: #333;
    cursor: pointer;
  }

  .bread_nav:last-child {
    cursor: auto;
  }
</style>