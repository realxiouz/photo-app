<template>
  <div id="app">
    <keep-alive :exclude="exclude">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: _ => ({
    exclude: ['PayResult', 'PhotoDetail']
  })
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
