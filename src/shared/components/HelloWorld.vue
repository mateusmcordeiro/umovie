<template>
  <div>{{ movieList }}</div>
</template>

<script>
import { useState } from '@state/movie';
import MovieService from '#services/movie';
export default {
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
