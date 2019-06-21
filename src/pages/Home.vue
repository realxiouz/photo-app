<template>
  <div>
    <search
      style="position: fixed;top: 0px; z-index:500"
      @on-submit="doSearch"
      @on-cancel="clearSearch"
      v-model="keywords"
    />
    <tab style="position: fixed;top: 44px; z-index:500;left:0;right:0" v-model="tabInx">
      <tab-item
        v-for="(i, inx) in tabs"
        :key="inx"
      >{{i}}</tab-item>
    </tab>
    <scroller
      lock-x
      @on-scroll-bottom="handleMore"
      ref="pv"
    >
      <div style="padding: 88px 0 53px 0">
        <item
          v-for="(i, inx) in list"
          :key="inx"
          :bean="i"
          :type="1"
        />
      </div>
    </scroller>
    <nav-bottom />
  </div>
</template>

<script>
import Item from '@/components/Item'
import NavBottom from '@/components/NavBar'

import {
  Box,
  XButton,
  Group,
  XInput,
  Alert,
  AlertModule,
  XSwitch,
  Tabbar,
  TabbarItem
} from 'vux'
import { PHOTOS } from '@/utils/const'
export default {
  components: {
    Box,
    XButton,
    Group,
    XInput,
    Alert,
    AlertModule,
    XSwitch,
    Tabbar,
    TabbarItem,
    Item,
    NavBottom
  },
  data: _ => ({
    list: [],
    page: 1,
    isLoading: false,
    isEnd: false,

    tabs: ['丽人', '秀色可惨', '小姐姐'],
    tabInx: 0,

    keywords: ''
  }),
  methods: {
    getData (resetPage = false) {
      this.isLoading = true
      if (resetPage) {
        this.page = 1
      }
      this.$vux.loading.show({ text: `${this.tabInx}-${this.page}-${this.keywords}` })
      setTimeout(_ => {
        let data = this.mockData()
        if (this.page === 1) {
          this.list = []
          this.$refs.pv.reset({top: 0})
        }
        this.list.push(...data)
        setTimeout(_ => {
          this.$refs.pv.reset()
        }, 500)
        this.$vux.loading.hide()
        this.isLoading = false
      }, 1500)
    },
    handleMore () {
      if (!this.isLoading) {
        this.page++
        this.getData()
      }
    },
    doSearch () {
      this.getData(true)
    },
    clearSearch () {
      this.getData(true)
    },
    mockData () {
      let arr = []
      for (let i = 0; i < 4; i++) {
        arr.push({
          id: i + 1,
          title: '花漾写真 [HuaYang] 2019.06.10 VOL.146 王雨纯',
          src: PHOTOS[Math.floor(Math.random() * PHOTOS.length)],
          count: 0,
          avatar: 'http://file.idray.com//Image/Brand/huayang.jpg!wh50',
          name: '花漾show',
          time: '2019-06-10',
          userId: 12
        })
      }
      return arr
    }
  },
  watch: {
    tabInx: {
      handler (val) {
        this.getData(true)
      }
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
