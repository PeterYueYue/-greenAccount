import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/home/home.vue'  //首页
import exchange from '@/components/pages/exchange.vue'  //首页

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/exchange',
      name: 'exchange',
      component: exchange
    }
  ]
})
