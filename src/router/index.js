import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/home/home.vue'  //首页
import exchange from '@/components/pages/exchange.vue'  //礼品兑换
import exchangeList from '@/components/pages/exchange_list.vue'  //礼品兑换 列表
import exchangeDetail from '@/components/pages/exchange_detail.vue'  //礼品兑换 详情

export default new Router({
	routes: [
		{
			path: '/',
			name: '首页',
			component: Home,
		}, {
			path: '/exchange',
			name: '礼品兑换',
			component: exchange,
			children: [
				{
					path: '',
					name: '',
					component: exchangeList,
				}, {
					path: 'detail',
					name: '详情',
					component: exchangeDetail,
				}
			]
		}
	]
})
