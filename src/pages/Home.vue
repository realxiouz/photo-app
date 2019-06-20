<template>
  <div>
    <search style="position: fixed;top: 0px; z-index:500" />
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
    <tabbar style="position: fixed">
      <tabbar-item
        v-for="(i, inx) in tabbars"
        :key="inx"
        :link="i.link"
        :selected="inx === 0"
      >
        <img
          slot="icon"
          :src="i.src"
        >
        <span slot="label">{{i.label}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Item from "@/components/Item";
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
} from "vux";

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
    Item
  },
  data: _ => ({
    tabbars: [
      { src: require("../assets/vux_logo.png"), label: "首页", link: "/home" },
      {
        src: require("../assets/vux_logo.png"),
        label: "套图",
        link: "/photos"
      },
      {
        src: require("../assets/vux_logo.png"),
        label: "视屏",
        link: "/videos"
      },
      {
        src: require("../assets/vux_logo.png"),
        label: "我",
        link: "/user-center"
      }
    ],

    list: [],
    page: 1,
    isLoading: false,
    isEnd: false,

    tabs: ["丽人", "秀色可惨", "小姐姐"],
    tabInx: 0
  }),
  methods: {
    getData (resetPage = false) {
      this.isLoading = true
      if (resetPage) {
        this.page = 1
      }
      this.$vux.loading.show({ text: `加载(type:${this.tabInx}, page:${this.page})` })
      setTimeout(_ => {
        let data = [
          {
            id: 1,
            title: '花漾写真 [HuaYang] 2019.06.10 VOL.146 王雨纯',
            src: 'http://file.idray.com/Upload/9900/5299/132051666191572568.jpg!wh400',
            count: 0,
            avatar: 'http://file.idray.com//Image/Brand/huayang.jpg!wh50',
            name: '花漾show',
            time: '2019-06-10',
            userId: 12
          },
          {
            id: 2,
            title: '花漾写真 [HuaYang] 2019.06.10 VOL.146 王雨纯',
            src: 'http://file.idray.com/Upload/9900/5299/132051666191572568.jpg!wh400',
            count: 59,
            avatar: 'http://file.idray.com//Image/Brand/huayang.jpg!wh50',
            name: '花漾show',
            time: '2019-06-10',
            userId: 4
          },
          {
            id: 3,
            title: '花漾写真 [HuaYang] 2019.06.10 VOL.146 王雨纯',
            src: 'http://file.idray.com/Upload/9900/5299/132051666191572568.jpg!wh400',
            count: 0,
            avatar: 'http://file.idray.com//Image/Brand/huayang.jpg!wh50',
            name: '花漾show',
            time: '2019-06-10',
            userId: 1
          },
          {
            id: 4,
            title: '花漾写真 [HuaYang] 2019.06.10 VOL.146 王雨纯',
            src: 'http://file.idray.com/Upload/9900/5299/132051666191572568.jpg!wh400',
            count: 0,
            avatar: 'http://file.idray.com//Image/Brand/huayang.jpg!wh50',
            name: '花漾show',
            time: '2019-06-10',
            userId: 2
          }
        ]
        if (this.page === 1) {
          this.list = []
        }
        this.list.push(...data)
        setTimeout(_ => {
          this.$refs.pv.reset()
        }, 500)
        this.$vux.loading.hide()
        this.isLoading = false
      }, 3000)
    },
    handleMore () {
      if (!this.isLoading) {
        this.page++
        this.getData()
      }
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
};
</script>
