<template>
  <div class="item-wrap">
    <div class="title" @click="toDetail">{{bean.title}}</div>
    <div class="img-wrap" @click="toDetail">
      <img :src="bean.src">
      <div class="count">{{bean.count ? `${bean.count}金币` : '免费'}}</div>
    </div>
    <div class="auth-info" @click="toAuth">
      <div class="ava-wrap">
        <img :src="bean.avatar">
      </div>
      <div class="name-time">
        <div class="name">{{bean.name}}</div>
        <div class="time">{{bean.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      default: 1
    },
    bean: {
      type: Object
    }
  },
  data: _ => ({}),
  methods: {
    toDetail () {
      let path = ''
      if (this.type === 1) {
        path = `/photo-detail/${this.bean.id}`
      } else if (this.type === 2) {
        path = `/video-detail/${this.bean.id}`
      }
      if (path) {
        this.$router.push({path})
      }
    },
    toAuth () {
      this.$router.push({path: `/user/${this.bean.userId}`})
    }
  }
}
</script>

<style lang="less" scoped>
.item-wrap {
  padding: 15px;
  margin-top: 10px;
  background: #fff;
  &:first-child{
    margin-top: 0px;
  }
  .title {
    font-weight: 400;
    font-size: 17px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    word-break: break-all;
    margin-bottom: 8px;
  }
  .img-wrap {
    position: relative;
    > img {
      max-width: 100%;
      min-height: 200px;
      height: 200px;
      margin-right: auto;
      margin-left: auto;
      vertical-align: middle;
    }
    .count {
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: #000;
      opacity: 0.8;
      color: #f5b527;
      font-size: 1rem;
      padding: 6px;
      min-width: 50px;
      text-align: center;
      font-family: arial;
    }
  }
  .auth-info {
    padding: 5px;
    display: flex;
    .ava-wrap {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .name-time {
      .name {
        height: 25px;
        color: black;
      }
      .time {
        color: #cecece;
        font-size: 14px;
        height: 15px;
        line-height: 1;
      }
    }
  }
}
</style>
