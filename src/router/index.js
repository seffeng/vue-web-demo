import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routesSite from './site'
import routesError from './error'
import routesTest from './test'

const tmpRoutes = []

export const constantRoutes = tmpRoutes.concat(
  routesSite,
  // 测试导航路由，删除
  routesTest,

  // 包含 404 等错误路由，需放在最后
  routesError
)

const createRouter = () => new VueRouter({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
