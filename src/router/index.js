import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index/Index'//首页
import Signin from '../components/Signin/Signin'//签到
import Success from '../components/Success/Success'//签到成功

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success
    }
  ]
})
