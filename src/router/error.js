export default [
  {
    path: '/not-auth',
    name: 'NotAuth',
    component: resolve => require(['@/views/error/not-auth'], resolve),
    meta: {
      title: '无权限',
      allow: true
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: resolve => require(['@/views/error/not-found'], resolve),
    meta: {
      title: '页面不存在',
      requiresAuth: false,
      allow: true
    }
  }
]
