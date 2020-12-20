<template>
  <div class="movie__list container">
    <MovieCard 
        v-for="movie in moviesFilter(movieListAll, filters)"
        :key="movie.id"
        :title="movie.title" 
        :description="movie.release_date" 
        :image="movie.poster_path" 
        :movieId="movie.id" 
        :votes="movie.vote_average"
      />
  </div>
</template>

<script>
import { useState } from '@state/movie';
import MovieCard from './MovieCard';
import MovieService from '#services/movie';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { moviesFilter } from '@utils/filters/moviesFilter.util';
export default {
  components: {
    MovieCard
  },
  setup() {      	
    const state = useState();
    const { movieList, pagination, filters } = state;
    const movieListAll = ref(
       computed(() => {
        if(movieList.size > 0) {
          return [...movieList.entries()].reduce(
             // eslint-disable-next-line
            (accumulator, [key, value]) => {
              return accumulator.concat(value.results);
            },
            []
          );
        }
        return [];
      })
    )
    MovieService.use(state).fetchList('now_playing').then(
      ({data}) => {
        movieList.set(data.page, data);
      }
    );
    filters.vote_average = true;
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
    
    return { movieList, movieListAll, filters, moviesFilter }
  }
}
</script>
<style lang="scss" scoped>
  @import "@design";
  .movie__list {
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
    row-gap: 20px;
  }
    
  
</style>
