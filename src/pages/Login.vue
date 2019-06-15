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
      ></x-input>
      <x-input title="密码 " placeholder="请输入密码" v-model="formBean.password" novalidate :show-clear="false" placeholder-align="left" type="password" :max="12"></x-input>
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
      <div style="color: #999999;text-align: center;font-size: 14px">{{webName}}</div>
      <div style="color: #999999;text-align: center;font-size: 12px">{{copyRight}}</div>
    </div>
  </div>
</template>

<script>
import { Box, XButton, Group, XInput, Alert, AlertModule, XSwitch } from 'vux'

export default {
  components: {
    Box, XButton, Group, XInput, Alert, AlertModule, XSwitch
  },
  data: _ => ({
    webName: '美图网',
    copyRight: 'Copyright © 2019 fenun.cn',
    formBean: {
      phone: '',
      password: ''
    },
    rememberMe: true
  }),
  methods: {
    handleOk () {
      console.log(this.formBean)
    }
  }
}
</script>
