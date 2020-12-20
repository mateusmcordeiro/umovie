<template>
  <header class="header container">
    <h1 class="logo">
      <span>u</span>Movie
    </h1>
  </header>
  <article class="container">
    <section class="movie__content">
      <h2 class="description">Filmes em cartaz</h2>
      <MovieList/>
    </section>
    
  </article>
  
</template>

<script>
import MovieList from '@components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  }
}
</script>

<style lang="scss" scoped>
@import "@design";
header {
  padding-top: 40px;
  padding-bottom: 40px;
}
.logo {
  @extend %typography-xlarge;
  color: white;
  span {
    @extend %typography-large;
    color: $primary-color;
  }
}
.description {
  @extend %typography-medium-heading;
  color: white;
}
.movie__content {
  margin-top: 50px;
}
</style>