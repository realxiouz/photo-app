<template>
  <div>
    <div>
      <previewer :list="list" ref="previewer" @on-index-change="handleChange" @on-close="handleClose"></previewer>
    </div>

    <alert v-model="showBuyDialog" title="最后一张了" button-text="打赏观看" @on-hide="preCharge">
      {{ 'test' }}
    </alert>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  mounted () {
    this.$refs.previewer.show(0)
  },
  data: _ => ({
    list: [
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
    ],
    isBuy: false,

    showBuyDialog: false
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
        this.$router.push({path: '/login'})
      }
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>
