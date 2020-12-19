<template>
  <div>{{ movieList }}</div>
</template>

<script>
import { useState } from '@state/movie';
export default {
  setup() {      	
    const state = useState();
    const { movieList } = state;
    return { movieList }
  }
}
</script>
