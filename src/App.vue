<template>
  <main>
    <router-view />
  </main>
  
</template>

<script>

export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
  @import "@design";
  main {
    background-color: $shark-color;
  }
</style>
