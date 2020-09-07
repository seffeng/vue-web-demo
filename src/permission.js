import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import { getPageTitle, debug } from '@/utils'
import { Notify } from 'quasar'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ name: 'Home' })
      NProgress.done()
    } else {
      // 此处代码可能需要修改！改为是否有权限！
      const allow = to.meta.allow || store.getters.name
      if (allow) {
        next()
      } else {
        try {
          // get user info 此处代码可能需要修改！改为是否有权限！
          await store.dispatch('user/getInfo')
          const allow = store.getters.name
          if (allow) {
            next()
          } else {
            next({ name: 'NotAuth' })
            NProgress.done()
          }
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')

          debug(error || 'Has Error')
          Notify.create({
            message: error || 'Has Error',
            color: 'negative',
            icon: 'warning'
          })

          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/
    if (to.meta.requiresAuth !== undefined && to.meta.requiresAuth === false) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
