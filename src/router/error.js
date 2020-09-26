import Layout from '@/layout/main.vue'

export default [
  {
    path: '/',
    component: Layout,
    name: 'ErrorIndex',
    meta: {
      title: '父菜单',
      icon: 'warning'
    },
    children: [
      {
        path: 'not-auth',
        name: 'NotAuth',
        component: () => import('@/views/error/not-auth'),
        meta: {
          title: '无权限',
          icon: 'menu',
          requiresAuth: false,
          separator: true,
          allow: true
        }
      },
      {
        path: 'not-found',
        name: 'NotFound',
        component: () => import('@/views/error/not-found'),
        meta: {
          title: '页面不存在',
          tag: 'ErrorIndex',
          requiresAuth: false,
          allow: true
        }
      },
      {
        path: '*',
        name: 'NotMatch',
        hidden: true,
        component: () => import('@/views/error/not-found'),
        meta: {
          title: '页面不存在',
          icon: 'menu',
          requiresAuth: false,
          allow: true
        }
      }
    ]
  }
]
