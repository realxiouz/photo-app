<template>
  <div class="q-bar">
    <div class="bar-item">

    </div>
    <div class="bar-item">

    </div>
    <div class="bar-item active">
      <div>

      </div>
    </div>
    <div class="bar-item">

    </div>
    <div class="bar-item">

    </div>
  </div>
</template>

<script>

export default {
  data: _ => ({

  })
}
</script>

<style lang="less" scoped>
.q-bar{
  display: flex;
  position: absolute;
  z-index: 500;
  bottom: 0;
  width: 100%;
  background-color: #F7F7FA;
  height: 53px;
  &::before{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #C0BFC4;
    color: #C0BFC4;
  }
  .bar-item{
    display: block;s
    -webkit-box-flex: 1;
    flex: 1;
    padding: 5px 0 0;
    font-size: 0;
    color: #999999;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    &.active{

    }
  }
}
</style>

