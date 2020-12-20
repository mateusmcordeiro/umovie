<template>
  <div class="base__badge" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  setup() {    

    return {  }
  }
}
</script>

<style lang="scss" scoped>
@import "@design";
.base__badge {
  padding: 1px 10px 2px;
  border: 1px solid white;
  border-radius: 46px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  transition: background-color .5s, color .5s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: $dark-color;
  }
}

</style>
