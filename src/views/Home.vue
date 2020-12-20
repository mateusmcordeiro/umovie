<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        <span>u</span>Movie
      </h1>
    </div>
  </header>
  <article class="container">
    <section class="movie__content">
      <h2 class="description">Filmes em cartaz</h2>
      <MovieListFilter/>
      <MovieList/>
    </section>
    
  </article>
  
</template>

<script>
import MovieList from '@components/MovieList.vue'
import MovieListFilter from '@components/MovieListFilter.vue';

export default {
  name: 'App',
  components: {
    MovieList,
    MovieListFilter
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
.accordion {
  margin-bottom: 20px;
  border-radius: 3px;
}
</style>