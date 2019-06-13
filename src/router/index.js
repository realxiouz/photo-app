import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user-center',
      name: 'UserCenter',
      component: _ => import('@/pages/UserCenter')
    },
    {
      path: '/my-wallet',
      name: 'MyWallet',
      component: _ => import('@/pages/MyWallet')
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: _ => import('@/pages/Recharge')
    },
    {
      path: '/register',
      name: 'Register',
      component: _ => import('@/pages/Register')
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: _ => import('@/pages/ResetPassword')
    },
    {
      path: '/login',
      name: 'Login',
      component: _ => import('@/pages/Login')
    }
  ]
})
