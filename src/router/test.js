import Layout from '@/layout/main.vue'

export default [
  {
    path: '/',
    name: 'TestIndex',
    component: Layout,
    meta: {
      title: '测试父菜单',
      subTitle: '子-标题',
      icon: 'menu'
    },
    redirect: 'test-a-1',
    children: [
      {
        path: 'test-a-1',
        name: 'TestA1',
        component: () => import('@/views/site/index'),
        meta: {
          title: '测试-A-1',
          tag: 'TestIndex',
          icon: 'home',
          requiresAuth: false,
          allow: true
        }
      },
      {
        path: 'test-a-2',
        name: 'TestA2',
        meta: {
          title: '测试-A2',
          tag: 'TestIndex',
          requiresAuth: false
        },
        component: () => import('@/views/error/not-auth')
      },
      {
        path: 'test-a-3',
        name: 'TestA3',
        meta: {
          title: '测试-A3',
          icon: 'map',
          tag: 'TestIndex',
          separator: true,
          requiresAuth: false
        },
        component: () => import('@/views/error/not-found')
      },
      {
        path: 'https://www.wuhuawu.com',
        name: 'TestA4',
        meta: {
          title: '测试-A4-外链',
          icon: 'trending_up',
          tag: 'TestIndex',
          requiresAuth: false
        }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'test-b-1',
        name: 'TestB1',
        meta: {
          title: '测试-B1',
          separator: true,
          requiresAuth: false
        },
        component: () => import('@/views/error/not-auth')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    meta: {
      title: '测试-C'
    },
    name: 'TestC',
    children: [
      {
        path: 'test-c-1',
        name: 'TestC1',
        meta: {
          title: '测试-C1',
          tag: 'TestC',
          separator: true,
          icon: 'assignment',
          requiresAuth: false
        },
        component: () => import('@/views/error/not-found')
      },
      {
        path: 'test-c-2',
        name: 'TestC2',
        meta: {
          title: '测试-C2',
          tag: 'TestC',
          separator: true,
          icon: 'assignment',
          requiresAuth: false
        },
        component: () => import('@/views/error/not-auth')
      }
    ]
  },
  {
    path: '/',
    name: 'TestD',
    redirect: 'test-d-1',
    meta: {
      title: '测试-D'
    },
    children: [
      {
        path: 'https://www.wuhuawu.com',
        name: 'TestD1',
        meta: {
          title: '测试-D1-外链',
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
