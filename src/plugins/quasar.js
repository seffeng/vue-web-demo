import Vue from 'vue'

import '@/styles/quasar.scss'
import 'quasar/dist/quasar.ie.polyfills'
import lang from 'quasar/lang/zh-hans.js'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  Notify,
  Dialog,
  LoadingBar
} from 'quasar'

Vue.use(Quasar, {
  config: {
    notify: {
      position: 'top'
    },
    loadingBar: {
      color: 'green-8',
      size: '5px',
      position: 'top'
    }
  },
  components: { /* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
    Notify,
    Dialog,
    LoadingBar
  },
  lang: lang
})
