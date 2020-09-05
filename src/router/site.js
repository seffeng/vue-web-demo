export default [
  {
    path: '/',
    name: 'Home',
    component: resolve => require(['@/views/site/index'], resolve),
    meta: {
      title: '首页',
      allow: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      iconfont: '&#xe641;',
      requiresAuth: false
    },
    component: resolve => require(['@/views/site/login'], resolve)
  }
]
