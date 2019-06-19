<template>
  <div>
    <div style="height:60vw">
      <video src="http://file.idray.com/Upload/9930/2297/131766521194734612.mp4" ref="v" class="video" controls autoplay @ended="handleEnd"></video>
    </div>
    <div class="buy-tip" v-if="!isBuy">
      <span style="color:#999;font-size:16px">免费观看 30 秒,打赏后观看完整版</span>
      <div>
        <x-button mini type="primary" @click.native="preCharge">打赏</x-button>
      </div>
    </div>

    <group>
      <x-textarea :max="200" placeholder="购买后可评价资源" v-model="post"></x-textarea>
    </group>
    <alert v-model="showBuyDialog" button-text="打赏观看" @on-hide="preCharge">
      <div>您已观看了30秒</div>
      <div>
        只需要打赏
        <span style="color:#f5b527">{{coin}} </span>金币
      </div>
      <div>就能观看完整版</div>
    </alert>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data: _ => ({
    isBuy: false,
    coin: 100,

    showBuyDialog: false,
    post: ''
  }),
  methods: {
    ...mapMutations(['setRedirectPath']),
    preCharge () {
      if (!this.user) {
        this.setRedirectPath(this.$route.path)
        this.$router.push({ path: '/login' })
      }
    },
    handleEnd () {
      if (!this.isBuy) {
        this.showBuyDialog = true
      }
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>


<style lang="less" scoped>
.video{
  width: 100%;
  height: auto;
  background: #000;
}
.buy-tip{
  padding: 15px 10px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}
</style>

