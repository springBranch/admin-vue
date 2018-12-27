export const constatnRoutes =  [
  {
    path: '/',
    component: () => import('@/components/Login')
  }, {
    path: '/403',
    component: () => import('@/components/error/403')
  }, {
    path: '/404',
    component: () => import('@/components/error/404')
  }, {
    path: '/index',
    component: () => import('@/components/layout/LayoutMain'),
    children: [{
      path: '',
      name:'首页',
      component: () => import('@/components/HelloWorld')
    }]
  }, {
    path: '/order',
    component: () => import('@/components/layout/LayoutMain'),
    name: '订单列表',
    children: [{
      path: 'add',
      name: '增加订单',
      component: () => import('@/components/view/order/add')
    }, {
      path: 'delete',
      name: '删除订单',
      component: () => import('@/components/view/order/delete')
    }, {
      path: 'table',
      name: '订单表格',
      component: () => import('@/components/view/order/table')
    }]
  },

  {
    path: '/log',
    component: () => import('@/components/layout/LayoutMain'),
    name: '日志管理',
    children: [{
      path: 'detail',
      name: '日志详情',
      component: () => import('@/components/view/order/add')
    }]
  }
  //这一行必须在最下面
  ,{path: '*', redirect: '/404'}]
