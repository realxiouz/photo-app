<template>
  <div style="background: #000;width:100vw;height:100vh">
    <previewer :list="list" ref="previewer" @on-index-change="handleChange" :options="options"></previewer>

    <div class="tip" v-if="!isBuy && list.length">
      <div style="color: #fff;font-size:14px">
        打赏
        <span style="color: #f5b527">{{coin}}</span>
        金币观看完整版 {{totalCount}} 张
      </div>
      <div>
        <x-button mini type="primary" @click.native="preCharge">打赏</x-button>
      </div>
    </div>

    <alert v-model="showBuyDialog" button-text="打赏观看" @on-hide="preCharge">
      <div>您已观看了 {{list.length}} 张</div>
      <div>
        只需要打赏
        <span style="color:#f5b527">{{coin}}</span>金币
      </div>
      <div>就能观看完整版</div>
    </alert>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  mounted () {
    this.getData()
  },
  data: _ => ({
    list: [],
    showBuyDialog: false,
    options: {
      closeEl: false,
      tapToClose: false,
      closeOnScroll: false,
      pinchToClose: false,
      closeOnVerticalDrag: false
    },

    totalCount: 50,
    isBuy: false,
    coin: 100
  }),
  methods: {
    ...mapMutations(['setRedirectPath']),
    handleChange (val) {
      if (val.currentIndex === this.list.length - 1 && !this.isBuy) {
        this.showBuyDialog = true
      }
    },
    handleClose () {
      this.$router.go(-1)
    },
    preCharge () {
      if (!this.user) {
        this.setRedirectPath(this.$route.path)
        this.$router.push({ path: '/login' })
      }
    },
    getData () {
      this.$vux.loading.show({
        text: '加载中'
      })
      setTimeout(_ => {
        this.list = [
          {
            src: 'http://file.idray.com/Upload/9900/5233/132037832580658913.jpg',
            w: 1200,
            h: 1800
          },
          {
            src: 'http://file.idray.com/Upload/9900/5233/132037832580658913.jpg',
            w: 1200,
            h: 1800
          },
          {
            src: 'http://file.idray.com/Upload/9900/5233/132037832580658913.jpg',
            w: 1200,
            h: 1800
          }
        ]
        this.$nextTick(_ => {
          this.$refs.previewer.show(0)
        })
        this.$vux.loading.hide()
      }, 3000)
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
.tip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1501;
  background: #000;
  height: 60px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
</style>
