
<template>
  <div class="loading" :class="{'active': props.active}">

  </div>
</template>
<script>
export default {
  props:  {
    active: Boolean
  },
  setup(props) {
    return {
      props
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@design";
  .loading {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: $dark-color;
    z-index: 999;
    left: 0;
    top: 0;
    display: none;
    &.active {
      display: block;
    }
  }
</style>