import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'

import router from '@/router'
import store from '@/store'

import { Search, Previewer, Alert, XButton } from 'vux'

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.component('search', Search)
Vue.component('Previewer', Previewer)
Vue.component('Alert', Alert)
Vue.component('XButton', XButton)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
