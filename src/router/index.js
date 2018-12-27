import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { constatnRoutes } from './constant'

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes: constatnRoutes
});


const white = ['/login', '/']

/**
 * 路由拦截，前置处理
 */
router.beforeEach((to, from, next) => {
  //进度条
  NProgress.start()

  next()

  NProgress.done()
})

/**
 * 路由拦截，后置处理
 */
router.afterEach(to => {
  NProgress.done()
})

export default router
