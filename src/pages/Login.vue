<template>
  <div>
    <box gap="40px">
      <span style="font-size: 20px;font-weight: 400;">登陆</span>
    </box>
    <group>
      <x-input
        title="手机号"
        placeholder="请输入手机号"
        v-model="formBean.phone"
        :show-clear="false"
        placeholder-align="left"
        :max="11"
        is-type="china-mobile"
        required
        ref="phone"
      ></x-input>
      <x-input
        title="密码 "
        placeholder="请输入密码"
        v-model="formBean.password"
        :show-clear="false"
        placeholder-align="left"
        type="password"
        :max="12"
        required
        :is-type="v => ({valid: v.length >= 4, msg: '4-12密码'})"
        ref="password"
      ></x-input>
      <x-switch title="记住密码" v-model="rememberMe"></x-switch>
    </group>

    <box gap="100px 10px 50px">
      <x-button type="primary" @click.native="handleOk">确定</x-button>
    </box>
    <div style="margin-bottom:50px;text-align:center">
      <router-link to="/register">注册账号</router-link>
      <router-link to="/reset-password">找回密码</router-link>
    </div>
    <div>
      <div style="color: #999999;text-align: center;font-size: 14px">{{info.webName}}</div>
      <div style="color: #999999;text-align: center;font-size: 12px">{{info.copyRight}}</div>
    </div>
  </div>
</template>

<script>
import { Box, XButton, Group, XInput, Alert, AlertModule, XSwitch } from 'vux'
import { mapState } from 'vuex'

export default {
  components: {
    Box, XButton, Group, XInput, Alert, AlertModule, XSwitch
  },
  data: _ => ({
    formBean: {
      phone: '',
      password: ''
    },
    rememberMe: true
  }),
  methods: {
    handleOk () {
      if (!this.$refs.phone.valid) {
        this.$vux.toast.text('请输入正确的手机号码')
        return
      }
      if (!this.$refs.password.valid) {
        this.$vux.toast.text('请输入4-12位密码')
        return
      }
      console.log(this.formBean)
    }
  },
  computed: {
    ...mapState(['info'])
  }
}
</script>
