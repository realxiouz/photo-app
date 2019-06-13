<template>
  <div>
    <box gap="40px">
      <span style="font-size: 20px;font-weight: 400;">注册</span>
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
      <x-input
        title="验证码"
        placeholder="请输入验证码"
        v-model="formBean.code"
        :show-clear="false"
        placeholder-align="left"
        :max="6"
        :is-type="v => ({valid:v.length == 4, msg: '输入正确的验证码'})">
        <x-button slot="right" type="primary" mini>获取验证码</x-button>
      </x-input>
      <x-input title="密码 " placeholder="请输入密码" v-model="formBean.password" novalidate :show-clear="false" placeholder-align="left" type="password" :max="12"></x-input>
    </group>

    <box gap="100px 10px 50px">
      <x-button type="primary" @click.native="handleOk">确定</x-button>
    </box>
    <div>
      <div style="color: #999999;text-align: center;font-size: 14px">{{webName}}</div>
      <div style="color: #999999;text-align: center;font-size: 12px">{{copyRight}}</div>
    </div>
  </div>
</template>

<script>
import { Box, XButton, Group, XInput, Alert, AlertModule } from 'vux'

export default {
  components: {
    Box, XButton, Group, XInput, Alert, AlertModule
  },
  data: _ => ({
    webName: '美图网',
    copyRight: 'Copyright © 2019 fenun.cn',
    formBean: {
      phone: '',
      code: '',
      password: ''
    }
  }),
  methods: {
    handleOk () {
      console.log(this.formBean)
    }
  }
}
</script>
