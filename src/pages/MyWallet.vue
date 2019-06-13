<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
    </div>
    <box gap="10px 10px">
      <x-button type="primary" link="/recharge">充值</x-button>
    </box>
  </div>
</template>

<script>
import { XButton, Box } from 'vux'

export default {
  components: {
    XButton, Box
  },
  data: _ => ({
    coin: 0
  }),
  mounted () {

  }
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
