<template>
  <div class="page" v-for="page in movieList.values()" :key="page">
    <MovieCard 
      v-for="movie in page.results"
      :key="movie.id"
      :title="movie.title" 
      :description="movie.release_date" 
      :image="movie.poster_path" 
      :redirectTo="'page'" 
      :votes="movie.vote_average"
    />
  </div>
  
</template>

<script>
import { useState } from '@state/movie';
import MovieCard from './MovieCard';
import MovieService from '#services/movie';

export default {
  components: {
    MovieCard
  },
  setup() {      	
    const state = useState();
    const { movieList } = state;
    MovieService.use(state).fetchList('now_playing').then(
      ({data}) => {
        movieList.set(data.page, data);
      }
    );
    return { movieList }
  }
}
</script>
