// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper);
/* eslint-disable no-new */

Vue.prototype.$http = Axios;
Vue.prototype.$host = '';

Axios.interceptors.request.use((req) => {
  if (req.data.name === 'business.login') {
    return req;
  }
  const token = window.sessionStorage.getItem('token');
  Object.assign(req.data, {token});
  return req;
}, function (error) {
  return Promise.reject(error);
});

//Axios全局接口返回数据拦截器
Axios.interceptors.response.use((res) => {
  return res;
}, function (error) {
  return Promise.reject(error);
});

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
