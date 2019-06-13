<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>

    <group>
      <cell :title="i.title" :is-link="i.link" v-for="(i, inx) in group1" :key="inx">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="i.src"/>
      </cell>
    </group>

    <group>
      <cell :title="i.title" :is-link="i.link" v-for="(i, inx) in group2" :key="inx">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="i.src"/>
      </cell>
    </group>

    <group>
      <cell :title="i.title" :is-link="i.link" v-for="(i, inx) in group3" :key="inx">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="i.src"/>
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      group1: [
        {title: '我的钱包', src: '../assets/vux_logo.png', link: true},
        {title: '我的订单', src: '../assets/vux_logo.png', link: ''}
      ],
      group2: [
        {title: '我的关注', src: '../assets/vux_logo.png', link: true}
      ],
      group3: [
        {title: '红包任务', src: '../assets/vux_logo.png', link: true}
      ]
    }
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
