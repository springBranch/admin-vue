export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/404',
    component: () => import('@/components/error/404')
  }, {
    path: '/index',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/components/HelloWorld'),
    }]
  }
]
