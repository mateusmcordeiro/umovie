<template>
  <div class="movie__list container">
    <div class="pagination" v-for="(page, index) in movieList.values()" :key="index">
      <MovieCard 
        v-for="movie in page.results"
        :key="movie.id"
        :title="movie.title" 
        :description="movie.release_date" 
        :image="movie.poster_path" 
        :redirectTo="`/movie/${movie.id}`" 
        :votes="movie.vote_average"
      />
    </div>
  </div>
</template>

<script>
import { useState } from '@state/movie';
import MovieCard from './MovieCard';
import MovieService from '#services/movie';
import { onMounted, onUnmounted } from 'vue';

export default {
  components: {
    MovieCard
  },
  setup() {      	
    const state = useState();
    const { movieList, pagination } = state;

    MovieService.use(state).fetchList('now_playing').then(
      ({data}) => {
        movieList.set(data.page, data);
      }
    );

    const handleScroll = () => {
      const mouseOnBottom =  document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (mouseOnBottom) {
        MovieService.use(state).fetchList('now_playing', { page: pagination.page + 1 }).then(
          ({data}) => {
            movieList.set(data.page, data);
            pagination.page = data.page;
          }
        );
      }
    }

    onMounted(
      () => {
        window.addEventListener('scroll', handleScroll);
      }
    ) 
    
    onUnmounted(
      () => {
        window.removeEventListener('scroll', handleScroll);
      }
    ) 
    
    return { movieList }
  }
}
</script>
<style lang="scss" scoped>
  @import "@design";
  .movie__list {
    display: flex;
    flex-direction: column;
    .pagination {
      display: grid;
      margin: 0 auto;
      column-gap: 20px;
      grid-template-columns: 1fr;
      @include media-breakpoint-up(sm) {
        grid-template-columns: 1fr 1fr;
      }
      @include media-breakpoint-up(md) {
        grid-template-columns: 1fr 1fr 1fr;
      }
      @include media-breakpoint-up(lg) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
      @include media-breakpoint-up(xl) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      }
      grid-template-rows: 350px 350px 350px 350px ;
    }
    
  }
</style>
