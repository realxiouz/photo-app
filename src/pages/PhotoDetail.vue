<template>
  <div style="background: #000;width:100vw;height:100vh" v-if="refresh">
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
import { getPhotoDetail } from '@/utils/api'
import { WEB_HOST } from '@/utils/const'

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
    coin: 100,
    refresh: true
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
      getPhotoDetail({id: this.$route.params.id}).then(r => {
        this.list = r.data.gallery_images.map(i => ({src: WEB_HOST + i}))
        this.coin = r.data.price
        this.totalCount = r.data.total
        this.isBuy = this.coin === 0
        this.$nextTick(_ => {
          this.$refs.previewer.show(0)
        })
      }).finally(_ => {
        this.$vux.loading.hide()
      })
    },
    resetData () {
      // this.list = []
      // this.isBuy = false
      this.showBuyDialog = false
      // this.$refs.previewer.close()
      this.refresh = false
      this.$nextTick(_ => {
        this.refresh = true
      })
    }
  },
  computed: {
    ...mapState(['user'])
  },
  activated () {
    this.getData()
  },
  deactivated () {
    this.resetData()
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
