import Layout from '@/layout/main.vue'

export default [
  {
    path: '/',
    name: 'TestIndex',
    component: Layout,
    meta: {
      title: '测试-导航',
      subTitle: '子-title',
      icon: 'menu'
    },
    redirect: 'test-1',
    children: [
      {
        path: 'test-1',
        name: 'TestOne',
        component: () => import('@/views/site/index'),
        meta: {
          title: '测试-首页',
          tag: 'TestIndex',
          icon: 'home',
          requiresAuth: false,
          allow: true
        }
      },
      {
        path: 'test-2',
        name: 'TestB',
        meta: {
          title: '测试-无权限',
          tag: 'TestIndex',
          requiresAuth: false
        },
        component: () => import('@/views/error/not-auth')
      },
      {
        path: 'test-3',
        name: 'TestC',
        meta: {
          title: '测试-404',
          icon: 'map',
          tag: 'TestIndex',
          separator: true,
          requiresAuth: false
        },
        component: () => import('@/views/error/not-found')
      },
      {
        path: 'https://www.wuhuawu.com',
        name: 'TestF',
        meta: {
          title: '测试-外链',
          icon: 'trending_up',
          tag: 'TestIndex',
          requiresAuth: false
        },
        component: () => import('@/views/error/not-found')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'test-a',
        name: 'TestA',
        meta: {
          title: '测试-无权限',
          separator: true,
          requiresAuth: false
        },
        component: () => import('@/views/error/not-auth')
      }
    ]
  },
  {
    path: '/',
    name: 'TestE',
    children: [
      {
        path: 'https://www.wuhuawu.com',
        name: 'TestE-1',
        meta: {
          title: '测试-外链',
          icon: 'mediation',
          requiresAuth: false
        }
      }
    ]
  },
  {
    path: '/test-login',
    name: 'Test',
    meta: {
      title: '测试-登录',
      requiresAuth: false
    },
    component: () => import('@/views/site/login')
  }
]
