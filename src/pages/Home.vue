<template>
  <div>
    <search/>
    <item v-for="(i, inx) in list" :key="inx" :bean="i" :type="1" />
    <tabbar style="position: fixed">
      <tabbar-item v-for="(i, inx) in tabs" :key="inx" :link="i.link">
        <img slot="icon" :src="i.src">
        <span slot="label">{{i.label}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Item from '@/components/Item'
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
    tabs: [
      {src: require('../assets/vux_logo.png'), label: '首页', link: '/home'},
      {src: require('../assets/vux_logo.png'), label: '套图', link: '/user-center'},
      {src: require('../assets/vux_logo.png'), label: '视屏', link: '/user-center'},
      {src: require('../assets/vux_logo.png'), label: '我', link: '/user-center'}
    ],
    list: [
      {
        id: 1,
        title: '花漾写真 [HuaYang] 2019.06.10 VOL.146 王雨纯',
        src: 'http://file.idray.com/Upload/9900/5299/132051666191572568.jpg!wh400',
        count: 0,
        avatar: 'http://file.idray.com//Image/Brand/huayang.jpg!wh50',
        name: '花漾show',
        time: '2019-06-10'
      },
      {
        id: 2,
        title: '花漾写真 [HuaYang] 2019.06.10 VOL.146 王雨纯',
        src: 'http://file.idray.com/Upload/9900/5299/132051666191572568.jpg!wh400',
        count: 59,
        avatar: 'http://file.idray.com//Image/Brand/huayang.jpg!wh50',
        name: '花漾show',
        time: '2019-06-10'
      },
      {
        id: 3,
        title: '花漾写真 [HuaYang] 2019.06.10 VOL.146 王雨纯',
        src: 'http://file.idray.com/Upload/9900/5299/132051666191572568.jpg!wh400',
        count: 0,
        avatar: 'http://file.idray.com//Image/Brand/huayang.jpg!wh50',
        name: '花漾show',
        time: '2019-06-10'
      },
      {
        id: 4,
        title: '花漾写真 [HuaYang] 2019.06.10 VOL.146 王雨纯',
        src: 'http://file.idray.com/Upload/9900/5299/132051666191572568.jpg!wh400',
        count: 0,
        avatar: 'http://file.idray.com//Image/Brand/huayang.jpg!wh50',
        name: '花漾show',
        time: '2019-06-10'
      }
    ]
  }),
  methods: {

  }
}
</script>
