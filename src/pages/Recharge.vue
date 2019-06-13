<template>
  <div>
    <checklist title="选择充值金额" :options="options" v-model="selVal" :max="1"></checklist>
    <box gap="10px 10px">
      <x-button type="primary">确定</x-button>
    </box>
  </div>
</template>

<script>
import { Checklist, Box, XButton } from 'vux'

export default {
  components: {
    Checklist, Box, XButton
  },
  data: _ => ({
    options: [{key: '100金币(1元)', value: 1}, {key: '1200金币(10元)', value: 10}, {key: '11000金币(100元)', value: 100}],
    selVal: [1]
  }),
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
