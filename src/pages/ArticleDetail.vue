<template>
  <div>
    detail-{{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  mounted () {
    console.log(`get data: ${this.$route.params.id}`)
  }
}
</script>
