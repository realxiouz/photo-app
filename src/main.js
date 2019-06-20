import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'

import router from '@/router'
import store from '@/store'

import { Search, Previewer, Alert, XButton, LoadingPlugin, Scroller, ToastPlugin, ButtonTab, ButtonTabItem, Loading, XTextarea, Tab, TabItem } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.component('search', Search)
Vue.component('Previewer', Previewer)
Vue.component('Alert', Alert)
Vue.component('XButton', XButton)
Vue.component('Scroller', Scroller)
Vue.component('ButtonTab', ButtonTab)
Vue.component('ButtonTabItem', ButtonTabItem)
Vue.component('Loading', Loading)
Vue.component('XTextarea', XTextarea)
Vue.component('Tab', Tab)
Vue.component('TabItem', TabItem)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
