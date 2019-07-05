<template>
  <div>
    <scroller lock-x >
    <div style="padding: 0 0 53px">
      <div class="top" @click="$router.push({name: 'EditProfile'})">
        <div class="ava-wrap">
          <img :src="user.avatar&&user.avatar.startsWith('data:image')?user.avatar:webHost+user.avatar">
        </div>
        <div class="name">{{user.nickname||user.mobile}}</div>
      </div>
      <group v-for="(item, index) in groups" :key="`group${index}`">
        <cell :title="i.title" :is-link="!!i.link" v-for="(i, inx) in item" :key="`group${index}cell${inx}`" :link="i.link">
          <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="i.src"/>
        </cell>
      </group>
      <box gap="20px 10px">
        <x-button @click.native="handleLogout" type="warn">退出登录</x-button>
      </box>
    </div>
    </scroller>
    <nav-bottom />

    <confirm
      v-model="qrCodeDialog"
      @on-confirm="saveQrCode"
      confirm-text="保存二维码"
      :show-cancel-button="false"
    >
      <img style="width:160px;height:160px" :src="qrCodeSrc" />
    </confirm>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
import { mapState, mapMutations } from 'vuex'
import { WEB_HOST } from '@/utils/const'
import { logout, getQrcode } from '@/utils/api'
import NavBottom from '@/components/NavBar'

export default {
  components: {
    Group,
    Cell,
    NavBottom
  },
  data () {
    return {
      webHost: WEB_HOST,
      groups: [
        [
          {title: '我的钱包', src: require('../assets/card.png'), link: '/my-wallet'},
          {title: '我的二维码', src: require('../assets/code.png'), link: ''},
          {title: '我的订单', src: require('../assets/order.png'), link: '/my-order'},
          {title: '红包任务', src: require('../assets/reward.png'), link: '/reward'},
          // {title: '我要赚钱', src: require('../assets/money.png'), link: ''},
          // {title: '成为合伙人', src: require('../assets/member.png'), link: ''},
          // {title: '加盟&代理', src: require('../assets/vux_logo.png'), link: ''},
          // {title: '我要约拍', src: require('../assets/vux_logo.png'), link: ''},
          // {title: '商务合作', src: require('../assets/vux_logo.png'), link: ''},
          // {title: '加油卡充值', src: require('../assets/oil.png'), link: ''},
          // {title: '话费充值', src: require('../assets/phone.png'), link: ''}
        ]
      ],
      qrCodeSrc: '',
      qrCodeDialog: false
    }
  },
  computed: {
    ...mapState(['user'])
  },
  mounted () {
    getQrcode().then(r => {
      this.qrCodeSrc = WEB_HOST + r.data
    })
  },
  methods: {
    ...mapMutations(['setUser']),
    handleLogout () {
      logout().then(r => {}).finally(_ => {
        localStorage.removeItem('token')
        this.setUser({})
        this.$vux.toast.text('注销成功')
        this.$router.push({name: 'Login'})
      })
    },
    saveQrCode () {
      let a = document.createElement('a')
      a.setAttribute('href', this.qrCodeSrc)
      a.setAttribute('download', 'qrcode.png')
      a.click()
    }
  }
}
</script>

<style lang="less">
// .vux-demo {
//   text-align: center;
// }
// .logo {
//   width: 100px;
//   height: 100px
// }
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

