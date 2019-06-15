import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'

import router from '@/router'

import { Search } from 'vux'

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.component('search', Search)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
