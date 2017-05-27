<template>
  <div>
   <section class="hero is-info is-medium">
     <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left">
            <a class="nav-item">
              News Blog
            </a>
          </div>
          <div class="nav-right nav-menu">
            <a class="nav-item is-active">
              Home
            </a>
            <a class="nav-item">
              Menu1
            </a>
            <a class="nav-item">
              Menu2
            </a>
            <a class="nav-item">
              Menu3
            </a>
            <a class="nav-item">
              Menu4
            </a>
          </div>
          </div>
        </header>
     </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          NewsBlog
        </h1>
        <h2 class="subtitle">
          Serving you the latest News on the web
        </h2>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li class="is-active"><a>Overview</a></li>
            <li><a>News1</a></li>
            <li><a>News2</a></li>
            <li><a>New3</a></li>
            <li><a>News4</a></li>
            <li><a>News5</a></li>
          </ul>
        </div>
      </nav>
    </div>
   </section>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
