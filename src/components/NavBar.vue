<template>
  <div>
    <search/>
    <div v-for="n in 100" :key="n">{{n}}</div>
    <tabbar>
      <tabbar-item v-for="(i, inx) in tabs" :key="inx" :link="i.link">
        <img slot="icon" :src="i.src">
        <span slot="label">{{i.label}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
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
    TabbarItem
  },
  data: _ => ({
    rememberMe: true,
    results: [],
    tabs: [
      {src: require('../assets/vux_logo.png'), label: '首页', link: '/home'},
      {src: require('../assets/vux_logo.png'), label: '套图', link: '/user-center'},
      {src: require('../assets/vux_logo.png'), label: '视屏', link: '/user-center'},
      {src: require('../assets/vux_logo.png'), label: '我', link: '/user-center'},
    ]
  }),
  methods: {
    handleOk() {
      console.log(this.formBean);
    }
  }
};
</script>
