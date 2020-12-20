<template>
  <div class="progress__bar" >
    <div class="progress" :style="{ 'width': barWidth }"></div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    percentage: Number
  },
  setup(props) {    
    const barWidth = computed(() => {
      return `${props.percentage}%`
    });
    return { barWidth }
  }
}
</script>

<style lang="scss" scoped>
@import "@design";
.progress__bar {
  position: relative;
  width: 100%;
  height: 4px;
  content: ' ';
  background-color: $dark-color;
  border-radius: 30px;
  
  .progress {
    position: absolute;
    height: 4px;
    background: linear-gradient(90deg, $secondary-color 0%, $primary-color 100%);
    z-index: $layer-tooltip-z-index;
    border-radius: 30px;
  }
}

</style>
