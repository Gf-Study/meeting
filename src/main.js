// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Public from './assets/css/public.css' // 公用样式
import 'lib-flexible'//px转化为rem
import axios from 'axios'  //引入axios
import qs from 'qs'  //引入qs
import apiUrl from './components/Global.vue'//定义全局接口

Vue.prototype.apiUrl = apiUrl.apiUrl;//全局使用接口
Vue.prototype.$axios = axios  //全局注册,任何组件都能直接使用
Vue.prototype.$qs = qs  //全局注册,转换成查询字符串
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
