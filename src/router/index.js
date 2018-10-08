import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/home/home.vue'  //首页
import exchange from '@/components/pages/exchange.vue'  //礼品兑换
import exchangeList from '@/components/pages/exchange_list.vue'  //礼品兑换 列表
import exchangeDetail from '@/components/pages/exchange_detail.vue'  //礼品兑换 详情
import homeExchange from '@/components/pages/home_exchange.vue'  //首页兑换
import exchangeBrand from '@/components/pages/exchange_brand.vue'  //爱心品牌专区
import lvzhanghu from '@/components/pages/lvzhanghu.vue'  //绿账户
import lvbd from '@/components/pages/lvbd.vue'  //绿账宝典
import applyCompany from '@/components/pages/apply_company.vue'  //申请爱心单位

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
    }, {
      path: '/home_exchange',
      name: '兑换',
      component: homeExchange,
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
        }, {
          path: 'brand',
          name: '爱心品牌专区',
          component: exchangeBrand,
        }
      ]
    },{
      path: '/lvzhanghu',
      name: '绿账宝',
      component: lvzhanghu,
    },{
		  path: '/lvbd',
		  name: '绿账宝典',
		  component: lvbd,
	  },{
      path: '/apply_company',
      name: '申请爱心单位',
      component: applyCompany,
    },
  ]
})
