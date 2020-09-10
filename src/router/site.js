import Layout from '@/layout/main.vue'

export default [
  {
    path: '/',
    component: Layout,
    meta: {
      title: 'Home',
      subTitle: 'sub-title',
      icon: 'home'
    },
    children: [
      {
        path: 'site',
        name: 'Home',
        component: () => import('@/views/site/index'),
        meta: {
          title: '首页',
          icon: 'home',
          requiresAuth: false,
          allow: true
        }
      }
    ]
  },
  {
    path: 'login',
    name: 'Login',
    hidden: false,
    meta: {
      title: '登录',
      requiresAuth: false
    },
    component: () => import('@/views/site/login')
  }
]
