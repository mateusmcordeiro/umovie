<template>
  <div>{{ movieList }}</div>
</template>

<script>
import { useState } from '@state/movie';
import MovieService from '#services/movie';
export default {
  setup() {      	
    const state = useState();
    const { movieList, movieInfos, movieCredits } = state;
    MovieService.use(state).fetchList('now_playing').then(
      ({data}) => {
        movieList.set(data.page, data);
      }
    );
    MovieService.use(state).get(590706).then(
      ({movie, credits}) => {
        movieInfos.set(movie.data.id, movie.data);
        movieCredits.set(credits.data.id, credits.data);
      }
    );
    return { movieList }
  }
}
</script>
