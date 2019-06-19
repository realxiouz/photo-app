import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/user-center',
      name: 'UserCenter',
      component: _ => import('@/pages/UserCenter'),
      meta: {
        title: '用户中心'
      }
    },
    {
      path: '/my-wallet',
      name: 'MyWallet',
      component: _ => import('@/pages/MyWallet'),
      meta: {
        title: '我的钱包'
      }
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: _ => import('@/pages/Recharge'),
      meta: {
        title: '充值'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: _ => import('@/pages/Register'),
      meta: {
        title: '注册'
      }
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: _ => import('@/pages/ResetPassword'),
      meta: {
        title: '重置密码'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: _ => import('@/pages/Login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: _ => import('@/pages/Home'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/photo-detail/:id',
      name: 'PhotoDetail',
      component: _ => import('@/pages/PhotoDetail'),
      meta: {
        title: '套图'
      }
    },
    {
      path: '/user/:id',
      name: 'User',
      component: _ => import('@/pages/User'),
      meta: {
        title: '他人主页'
      }
    },
    {
      path: '/videos',
      name: 'Videos',
      component: _ => import('@/pages/Videos'),
      meta: {
        title: '视频'
      }
    },
    {
      path: '/photos',
      name: 'Photos',
      component: _ => import('@/pages/Photos'),
      meta: {
        title: '套图'
      }
    },
    {
      path: '/video-detail/:id',
      name: 'VideoDetail',
      component: _ => import('@/pages/VideoDetail'),
      meta: {
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title}_${store.state.info.webName}` : store.state.info.webName
  if (to.path === '/user-center' && !store.state.user) {
    next('/login')
  }
  next()
})

export default router
