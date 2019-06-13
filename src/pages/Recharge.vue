<template>
  <div>
    <checklist title="选择充值金额" :options="options" v-model="selVal" :max="1" :min="1"></checklist>
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
    options: [{value: '100金币(1元)', key: 1}, {value: '1200金币(10元)', key: 10}, {value: '11000金币(100元)', key: 100}],
    selVal: [1]
  })
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
