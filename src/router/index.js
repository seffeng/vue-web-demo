import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import routesSite from './site'
import routesError from './error'

const tmpRoutes = []

export const constantRoutes = tmpRoutes.concat(
  routesSite,
  routesError
)

const createRouter = () => new VueRouter({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
