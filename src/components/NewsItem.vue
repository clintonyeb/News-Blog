<template>
  <div class="box">
    <article class="media">
    <figure class="media-left">
      <p class="image is-128x128">
        <img :src="news.urlToImage">
      </p>
    </figure>

    <div class="media-content">
      <div class="content">
        <div class="columns">
          <div class="column">
            <strong>{{news.title}}</strong>
          </div>
          <div class="column is-narrow">
            <small>{{date}}</small>
          </div>
        </div>
          {{news.description}}
          <br>
          Author: {{news.author}}
          <br>
          <button class="button is-info"><a :href="news.url">Read more</a></button>
        </p>
      </div>
    </div>
   
  </article>
  </div>
</template>

<script>
import * as moment from 'moment'

export default {

  name: 'news-item',
  props: ['news'],
  data () {
    return {
    }
  },
  computed: {
    date: function () {
      return moment(this.news.publishedAt).fromNow()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
