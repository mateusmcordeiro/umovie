<template>
  <main>
    <router-view />
    <Loading :active="loading"/>
  </main>
  
</template>

<script>
import { useState } from '@state/movie';
import Loading from '@views/_loading.vue';
export default {
  components: {
    Loading
  },
  name: 'App',
  setup() {
    const state = useState();
    const { loading } = state;
    return { loading }
  }
}
</script>
<style lang="scss" scoped>
  @import "@design";
  main {
    padding-bottom: 50px;
    background-color: $shark-color;
  }
</style>
