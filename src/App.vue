<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>

import MyHeader from './components/MyHeader';

export default {
  name: 'app',
  components: {
    MyHeader
  }
}
</script>

<style src="../node_modules/bulma/css/bulma.css"></style>
