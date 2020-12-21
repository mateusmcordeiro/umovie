<template>
  <main>
    <router-view />
    <Loading/>
  </main>
  
</template>

<script>
import Loading from '@views/_loading.vue';
export default {
  components: {
    Loading
  },
  name: 'App',
  setup() {

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
