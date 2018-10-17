<template>
  <div class="lv_wrap">
    <div class="lv_bd_bread">您的位置：绿环保 > <span>绿账宝典</span></div>
    <ul class="lv_bd_tab">
      <li class="active">全部</li>
      <li>政策法规</li>
      <li>标准规范</li>
      <li>垃圾分类知识</li>
      <li>操作指南</li>
    </ul>
    <div class="lv_bd_notice" v-for="(items,index) in listData" @mouseenter.stop="listHover(true,index)"
         @mouseleave.stop="listHover(false,index)" @click="jumpDetails">
      <div class="lv_bd_notice_title active" v-if="items.hoverShow">{{items.title}}<span class="date"><span>{{items
				.newsTime | momentTime}}</span><br/>{{items.newsTime | momentYear}}</span></div>
      <div class="lv_bd_notice_title" v-else>{{items.title}}<span class="date">{{items.newsTime | moment}}</span></div>
      <div class="lv_bd_notice_text active" v-if="items.hoverShow">{{items.newsContent}}</div>
      <div class="lv_bd_notice_text" v-else>{{items.newsContent}}</div>
      <img src="@/assets/lvz_icon_arrow.png" alt="" class="lv_bd_arrow" v-if="items.hoverShow">
    </div>
    <pagination></pagination>
  </div>
</template>
<script>
	import api from "@/api/api.js";
	import '@/assets/pages/lvzhanghu.css';
	import pagination from '@/components/common/pagination.vue';

	export default {
		data() {
			return {
				listData: [],
			}
		},
		components: {pagination},
		mounted() {
			this.allList4NewStyle();
		},
		methods: {
			allList4NewStyle() {
				api.allList4NewStyle({
					data: {
						category: "05,06,07,24",
					},
				}).then(res => {
					res.data.newsList.content.map(items => {
						items.hoverShow = false;
					});
					this.listData = res.data.newsList.content;
				})
			},
			listHover(status, index) {
				this.listData[index].hoverShow = status
			},
			jumpDetails(){
				this.$router.push({
					path: '/lvzhanghu'
				})
			},
		}
	}
</script>