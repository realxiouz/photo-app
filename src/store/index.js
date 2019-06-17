import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {
      webName: '美图网',
      copyRight: 'Copyright © 2019 fenun.cn'
    },
    user: null,
    redirectPath: ''
  },
  mutations: {
    setRedirectPath (store, path) {
      store.redirectPath = path
    }
  }
})
