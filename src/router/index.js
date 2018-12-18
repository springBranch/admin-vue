import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '@/components/layout/LayoutMain'

Vue.use(Router)

// 导出路由 在 main.js 里使用
const router = new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    // {
    //   path: '/index',
    //   component: HelloWorld
    // },
    {
      path: '/404',
      component: () => import('@/components/error/404')
    }, {
      path: '/index',
      component: Layout,
      children: [{
        path: '',
        children: [{
          path: '/HelloWorld',
          component: HelloWorld,
          meta: {
            label: '主页'
          }
        }]
      }]
    }
  ]
})

/**
 * 路由拦截，前置处理
 */
router.beforeEach((to, from, next) => {
  //进度条
  NProgress.start()
  // console.log(to.matched)
  // console.log(from.matched)
  next()

  NProgress.done()

})

/**
 * 路由拦截，后置处理
 */
router.afterEach(to => {
  NProgress.done()
  // console.log(to.matched)
})

export default router
