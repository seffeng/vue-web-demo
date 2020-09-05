import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import '@/permission'

import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  locale,
  size: 'medium'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
