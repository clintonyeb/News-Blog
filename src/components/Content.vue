<template>
  <div class="container padded-top">
    <news-item v-for="news in newsItems" :key="news.url" :news="news"></news-item>
  </div>
</template>

<script>
import NewsItem from './NewsItem'
import store from '../store/'

export default {
  name: 'content',
  data () {
    return {
    }
  },
  computed: {
    newsItems: function () {
      return store.state.news.news;
    }
  },
  mounted() {
    store.dispatch('getNewsItems')
  },
  components: {
    NewsItem
  }
}
</script>

<style scoped>
  .padded-top {
    padding-top: 30px;
  }
</style>
