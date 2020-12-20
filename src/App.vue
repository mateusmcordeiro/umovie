<template>
  <main>
    <Home/>
  </main>
  
</template>

<script>
import Home from '@views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>
<style lang="scss" scoped>
  @import "@design";
  main {
    background-color: $shark-color;
  }
</style>
