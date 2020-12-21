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
import { computed, onMounted, ref } from 'vue';
import { moviesFilter } from '@utils/filters/moviesFilter.util';
export default {
  components: {
    MovieCard
  },
  setup() {      	
    const state = useState();
    const { movieList, filters } = state;
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
    onMounted(() => {
      state.pagination.loading = true;
      MovieService.use(state).fetchList('now_playing').then(
        ({data}) => {
          movieList.set(data.page, data);
        }
      ).finally(
        () => {
          state.pagination.loading = false;
        }
      );
    })
    
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
    .card {
      @include media-breakpoint-down(sm) {
        margin: 0 auto;
      }
    }
  }
    
  
</style>
