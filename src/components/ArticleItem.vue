<template>
  <div class="item-detail" @click="$router.push(`/article-detail/${bean.id}`)">
    <div v-if="type===0" class="item type0">
      <div class="title">{{bean1.title}}</div>
      <div class="info">
        <div class="item-tag" v-if="bean1.is_top">置顶</div>
        <div class="item-tag" v-if="bean1.is_hot">热</div>
        <div class="auth">{{bean1.auth}}</div>
        <div class="v-count">浏览量&nbsp;{{bean1.view_count}}</div>
        <div class="c-time">{{moment(bean1.createtime*1000).format('YYYY-MM-DD')}}</div>
      </div>
    </div>
    <div v-if="type===1" class="item type1">
      <div class="left">
        <div class="title">{{bean2.title}}</div>
        <div class="info">
          <div class="item-tag" v-if="bean2.is_top">置顶</div>
          <div class="item-tag" v-if="bean2.is_hot">热</div>
          <div class="auth">{{bean2.auth}}</div>
          <div class="v-count">浏览量&nbsp;{{bean2.view_count}}</div>
          <!-- <div class="c-time">{{moment().from(bean2.createtime*1000)}}</div> -->
        </div>
      </div>
      <div class="right">
        <img :src="bean2.img" alt />
      </div>
    </div>
    <div v-if="type===3" class="item type3">
      <div class="title">{{bean1.title}}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    type: {
      type: Number,
      default: 0
    },
    bean: Object
  },
  data: _ => ({
    bean1: {
      title:
        '酝酿了259天的科创板在上交所交易大厅内迎来开市的锣声，第一批25家科创板公司正式上市交易。截至发稿，安集科技涨幅最高，达287.85%。',
      type: 0,
      auth: '央视网新闻',
      view_count: 30,
      createtime: 1562292831,
      is_top: true,
      is_hot: true
    },
    bean2: {
      title:
        '酝酿了259天的科创板在上交所交易大厅内迎来开市的锣声，第一批25家科创板公司正式上市交易。截至发稿，安集科技涨幅最高，达287.85%。',
      type: 0,
      auth: '央视网新闻',
      view_count: 30,
      createtime: 1562292831,
      is_top: true,
      is_hot: false,
      img: 'https://p3.pstatp.com/list/pgc-image/RWugmIS8z2e3hh'
    },
    moment
  })
}
</script>

<style lang="less" scoped>
.item-detail {
  margin: 0px 15px;
  border-bottom: 1px solid rgba(221, 221, 221, 0.6);
  .item {
    padding: 16px 0;
  }
  .type0 {
    .title {
      line-height: 21px;
      font-size: 17px;
      max-height: 42px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    // .info{
    //   margin-top: 6px;
    //   display: flex;
    //   line-height: 12px;
    //   font-size: 10px;
    //   color: #999;
    //   .item-tag{
    //     color: #f85959;
    //     border: 1px solid rgba(248, 89, 89, 0.5);
    //         border-radius: 2px;
    //         line-height: 12px;
    //         font-size: 9px
    //   }
    //   >div{
    //     margin-right: 5px;
    //   }
    // }
  }
  .type1 {
    display: flex;
    .left {
      width: 67%;
      padding-right: 12px;
      .title{
        line-height: 21px;
        font-size: 17px;
        max-height: 63px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
    .right {
      width: 33%;
      height: 83px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.info {
  margin-top: 6px;
  display: flex;
  line-height: 12px;
  font-size: 10px;
  color: #999;
  .item-tag {
    color: #f85959;
    border: 1px solid rgba(248, 89, 89, 0.5);
    border-radius: 2px;
    line-height: 12px;
    font-size: 9px;
  }
  > div {
    margin-right: 5px;
  }
}
</style>

