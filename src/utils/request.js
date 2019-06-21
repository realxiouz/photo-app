import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import store from '@/store'

const request = axios
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.headers['X-Requested-With'] = 'X-Requested-With'
axios.defaults.baseURL = '/api'

axios.interceptors.request.use(
  r => {
    if (r.method === 'post') {
      r.data = qs.stringify(r.data)
    }
    if (store.state.user) {
      r.headers['token'] = store.state.user.token
    }
    return r
  },
  e => {

  }
)

axios.interceptors.response.use(
  res => {
    if (res.data.code === 1) {
      return res.data
    } else if (res.data.code === 0) {
      Vue.$vux.toast.text(res.data.msg)
      return Promise.reject(new Error(res.data.msg))
    }
    return Promise.reject(new Error('出错了'))
  },
  e => {
  }
)

export default request
