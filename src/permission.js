import router from './router'
import store from './store'
import { LoadingBar } from 'quasar'
import { getToken } from '@/utils/auth' // get token from cookie
import { getPageTitle, debug } from '@/utils'
import { Notify } from 'quasar'

router.beforeEach(async(to, from, next) => {
  // start progress bar
  LoadingBar.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ name: 'Home' })
      LoadingBar.stop()
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
            LoadingBar.stop()
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
          LoadingBar.stop()
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
      LoadingBar.stop()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  LoadingBar.stop()
})
