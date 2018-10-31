import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/home/home.vue'  //首页
import Login from '@/components/login.vue'  //登录
import exchange from '@/components/pages/exchange.vue'  //礼品兑换
import exchangeList from '@/components/pages/exchange_list.vue'  //礼品兑换 列表
import exchangeDetail from '@/components/pages/exchange_detail.vue'  //礼品兑换 详情
import homeExchange from '@/components/pages/home_exchange.vue'  //首页兑换
import integralList from '@/components/pages/integral_list.vue'  //积分捐赠
import integralDetail from '@/components/pages/integral_detail.vue'  //积分捐赠 详情
import exchangeBrand from '@/components/pages/exchange_brand.vue'  //爱心品牌专区
import lvzhanghu from '@/components/pages/lvzhanghu.vue'  //绿账户
import lvbd from '@/components/pages/lvbd.vue'  //绿账宝典
import lvxd from '@/components/pages/lvxd.vue'  //绿账行动
import hzvs from '@/components/pages/hzvs.vue'  //惠众绿色
import hzdw from '@/components/pages/hzdw.vue'  //合作单位
import hdtd from '@/components/pages/hdtd.vue'  //活动天地
import zhzq from '@/components/pages/zhzq.vue'  //中行专区
import lv_volunteer from '@/components/pages/lv_volunteer.vue'  //志愿者活动
import lv_volunteer_details from '@/components/pages/lv_volunteer_details.vue'  //志愿者活动详情
import applyCompany from '@/components/pages/apply_company.vue'  //申请爱心单位
import userinfo from '@/components/userInfo/userinfo.vue'  //绿账中心
import baseinfo from '@/components/userInfo/baseinfo.vue' //绿账中心基本资料
import games from '@/components/pages/games.vue'  //趣味游戏
import barcodematch from '@/components/userInfo/barcodematch.vue' //绿账中心匹配条码
import barcodesearch from '@/components/userInfo/barcodesearch.vue' //绿账中心匹配条码查询
import createcard from '@/components/userInfo/createcard.vue' //绿账中心开卡补卡
import inttran from '@/components/userInfo/inttran.vue' //绿账中心积分转移
import changepassword from '@/components/userInfo/changepassword.vue' //绿账中心更改密码
import feedback from '@/components/userInfo/feedback.vue' //绿账中心意见反馈
import message from '@/components/userInfo/message.vue' //绿账中心我的信息
import address from '@/components/userInfo/address.vue' //绿账中心我的信息

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home,
    }, {
      path: '/login',
      name: '登录',
      component: Login,
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
    }, {
      path: '/integral_list',
      name: '积分捐赠',
      component: integralList,
    }, {
      path: '/integral_detail',
      name: '积分捐赠详情',
      component: integralDetail
    },
    {
      path: '/lvzhanghu',
      name: '绿账宝',
      component: lvzhanghu,
    },
    {
      path: '/lvzx',
      name: '绿账中心',
      component: userinfo,
      children:[
        {
          path:'',
          name:'',
          component:baseinfo
        },
        {
          path:'barcodematch',
          name:'条码匹配',
          component:barcodematch
        },
        {
          path:'barcodesearch',
          name:'匹配条码查询',
          component:barcodesearch
        },
        {
          path:'createcard',
          name:'开卡补卡管理',
          component:createcard
        },
        {
          path:'inttran',
          name:'积分转移',
          component:inttran
        },
        {
          path:'changepassword',
          name:'密码更改',
          component:changepassword
        },
        {
          path:'feedback',
          name:'意见反馈',
          component:feedback
        },
        {
          path:'message',
          name:'我的信息',
          component:message
        },
        {
          path:'address',
          name:'配送地址',
          component:address
        }
      ]
    },{
		  path: '/lvbd',
		  name: '绿账宝典',
		  component: lvbd,
	  },{
      path: '/lvxd',
      name: '绿账行动',
      component: lvxd,
    }, {
      path: '/hzvs',
      name: '惠众绿色',
      component: hzvs,
    }, {
      path: '/hzdw',
      name: '合作单位',
      component: hzdw,
    }, {
      path: '/hdtd',
      name: '活动天地',
      component: hdtd,
    }, {
      path: '/zhzq',
      name: '中行专区',
      component: zhzq,
    }, {
      path: '/lv_volunteer',
      name: '志愿者活动',
      component: lv_volunteer,
    }, {
      path: '/lv_volunteer_details',
      name: '志愿者活动详情',
      component: lv_volunteer_details
    }, {
      path: '/apply_company',
      name: '申请爱心单位',
      component: applyCompany,
    }, {
      path: '/games',
      name: '趣味游戏',
      component: games,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }

})
