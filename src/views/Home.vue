<template>
  <header class="header banner">
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
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
    MovieList,
    MovieListFilter
  },
  setup() {
    let transitionName = ref('');
    watch(useRouter, (to, from) => {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    })
    return {
      transitionName
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import "@design";
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