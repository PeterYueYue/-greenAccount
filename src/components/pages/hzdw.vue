<template>
  <div class="lv_wrap">
    <div class="lv_bd_bread">您的位置：绿环保 > <span>合作单位</span></div>
    <ul class="lv_bd_tab">
      <li :class="showOne&&showTwo?'active':''" @click="allList4NewStyleOne(true);">全部</li>
      <li :class="showOne&&!showTwo?'active':''" @click="allList4NewStyleOne(false)">支持单位</li>
      <li :class="showTwo&&!showOne?'active':''" @click="allList4NewStyleTwo(false)">爱心单位</li>
      <li :class="showThree&&!showTwo?'active':''" @click="allList4NewStyleThree(false)">理事单位</li>
    </ul>
    <div class="lv_dw_text" v-show="showOne">
      <div class="lv_dw_title">绿色账户支持单位</div>
      <div class="lv_dw_name" v-for="items in listDataOne">{{items.title}}</div>
    </div>
    <div class="lv_dw_text" v-show="showTwo">
      <div class="lv_dw_title">绿色账户爱心单位</div>
      <div class="lv_dw_name" v-for="items in listDataTwo">{{items.title}}</div>
    </div>
    <div class="lv_dw_text" v-show="showThree">
      <div class="lv_dw_title">绿色账户理事单位</div>
      <div class="lv_dw_name" v-for="items in listDataThree">{{items.title}}</div>
    </div>
  </div>
</template>
<script>
	import api from "@/api/api.js";
	import '@/assets/pages/lvzhanghu.css';

	export default {
		data:function() {
			return {
				listDataOne: [],
				listDataTwo: [],
				listDataThree: [],
				showOne: true,
				showTwo: true,
				showThree: true,
			}
		},
		mounted:function() {
			this.allList4NewStyleOne(true);
		},
		methods: {
			allList4NewStyleOne:function(status) {
				api.allList4NewStyle({
					data: {
						category: "03",
					},
				}).then(res => {
					if (status) {
						this.allList4NewStyleTwo(true);
					}
					this.showOne = true;
					this.showTwo = status;
					this.showThree = status;
					this.listDataOne = res.data ? res.data.newsList.content : '';
				})
			},
			allList4NewStyleTwo:function(status) {
				api.allList4NewStyle({
					data: {
						category: "14",
					},
				}).then(res => {
					if (status) {
						this.allList4NewStyleThree(true);
					}
					this.showOne = status;
					this.showTwo = true;
					this.showThree = status;
					this.listDataTwo = res.data ? res.data.newsList.content : '';
				})
			},
			allList4NewStyleThree:function(status) {
				api.allList4NewStyle({
					data: {
						category: "15",
					},
				}).then(res => {
					this.showOne = status;
					this.showTwo = status;
					this.showThree = true;
					this.listDataThree = res.data ? res.data.newsList.content : '';
				})
			},
		}
	}
</script>