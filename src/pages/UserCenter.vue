<template>
  <div>
    <div class="top" @click="$router.push({name: 'EditProfile'})">
      <div class="ava-wrap">
        <img :src="user.avatar&&user.avatar.startsWith('data:image')?user.avatar:webHost+user.avatar">
      </div>
      <div class="name">{{user.nickname||user.mobile}}</div>
    </div>
    <group>
      <cell :title="i.title" :is-link="!!i.link" v-for="(i, inx) in group1" :key="inx" :link="i.link">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="i.src"/>
      </cell>
    </group>
    <group>
      <cell :title="i.title" :is-link="!!i.link" v-for="(i, inx) in group2" :key="inx" :link="i.link">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="i.src"/>
      </cell>
    </group>
    <group>
      <template v-if="user.is_member === 1">
        <cell :title="i.title" :is-link="!!i.link" v-for="(i, inx) in group4" :key="inx" :link="i.link">
          <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="i.src"/>
        </cell>
      </template>
      <cell v-if="user.is_member === 0" title="注册会员">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../assets/me-active.png"/>
      </cell>
    </group>
    <box gap="20px 10px">
      <x-button @click.native="handleLogout" type="warn">退出登录</x-button>
    </box>
    <nav-bottom />
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { mapState, mapMutations } from 'vuex'
import { WEB_HOST } from '@/utils/const'
import { logout } from '@/utils/api'
import NavBottom from '@/components/NavBar'

export default {
  components: {
    Group,
    Cell,
    NavBottom
  },
  data () {
    return {
      group1: [
        {title: '我的钱包', src: require('../assets/vux_logo.png'), link: '/my-wallet'},
        {title: '我的订单', src: require('../assets/vux_logo.png'), link: ''}
      ],
      group2: [
        {title: '我的关注', src: require('../assets/vux_logo.png'), link: ''},
        {title: '红包任务', src: require('../assets/vux_logo.png'), link: '/reward'}
      ],
      group4: [
        {title: '发布图集', src: require('../assets/photo-active.png'), link: '/photo-post'},
        {title: '发布视频', src: require('../assets/video-active.png'), link: ''}
      ],
      webHost: WEB_HOST
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted () {
  },
  methods: {
    ...mapMutations(['setUser']),
    handleLogout () {
      logout().then(r => {}).finally(_ => {
        sessionStorage.removeItem('token')
        this.setUser({})
        this.$vux.toast.text('注销成功')
        this.$router.push({name: 'Login'})
      })
    }
  }
}
</script>

<style lang="less">
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>

<style lang="less" scoped>
.top{
  height: 200px;
  text-align: center;
  box-sizing: border-box;
  padding-top: 45px;
  background: #ff4d67;
  .ava-wrap{
    width: 80px;
    height: 80px;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
    box-shadow: 0 1px 10px 0 #a3b4bf;
    >img{
      width: 100%;
      height: 100%;
    }
  }
  .name{
    font-size: 17px;
    color: #fff;
    margin-top: 0px;
  }
}
</style>

