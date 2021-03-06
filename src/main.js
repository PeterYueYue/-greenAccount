// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios';
import moment from 'moment/moment';
import VueQrcode from '@xkeshi/vue-qrcode';

Vue.component(VueQrcode.name, VueQrcode);

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */

Vue.prototype.$http = Axios;
Vue.prototype.$host = '';
Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD';
  return moment(value).format(formatString);
});
Vue.filter('momentYear', function (value, formatString) {
  formatString = formatString || 'YYYY-MM';
  return moment(value).format(formatString);
});
Vue.filter('momentTime', function (value, formatString) {
  formatString = formatString || 'DD';
  return moment(value).format(formatString);
});
Vue.filter('momentDate', function (value, formatString) {
  formatString = formatString || 'YYYY年MM月DD日';
  return moment(value).format(formatString);
});
Vue.filter('momentmessage', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD h:mm:ss';
  return moment(value).format(formatString);
});

// Axios.interceptors.request.use((req) => {
//   if (req.data.name === 'business.login') {
//     return req;
//   }
//   const token = window.sessionStorage.getItem('token');
//   Object.assign(req.data, {token});
//   return req;
// }, function (error) {
//   return Promise.reject(error);
// });

// //Axios全局接口返回数据拦截器
// Axios.interceptors.response.use((res) => {
//   return res;
// }, function (error) {
//   return Promise.reject(error);
// });

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
