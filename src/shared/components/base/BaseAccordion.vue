<template>
  <div class="accordion" :class="{'active': reactiveData.active}" @click="toggleActive">
    <header class="accordion__header">
      <slot name="header"></slot>
      <BaseIcon>
        <template v-slot:svg>
          <svg class="icon__expand" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/></svg>
        </template>
      </BaseIcon>
    </header>
    <div class="accordion__expand">
      <slot name="body"></slot>
    </div>

  </div>
</template>

<script>
import { reactive } from 'vue';
import BaseIcon from './BaseIcon';
export default {
  components: {
    BaseIcon
  },
  setup() {    
    const reactiveData = reactive({
      active: false
    });
    const toggleActive = ($event) => {
      if (
        $event.target.className === 'accordion__header' 
        || 
        $event.target.nodeName === 'svg' 
        || 
        $event.target.nodeName === "path"
      ) {
        reactiveData.active = !reactiveData.active;
      }
    }
    return { reactiveData, toggleActive }
  }
}
</script>

<style lang="scss" scoped>
@import "@design";
.accordion {
  height: auto;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: $dark-color;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @extend %typography-small-heading;
  }
  .accordion__expand {
    height: auto;
    max-height: 0px;
    transition: max-height .5s;
    overflow: hidden;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      fill: $primary-color;
      transition: transform .5s;
    }
  }
  &.active {
    .accordion__expand {
      max-height: 600px;
    }
    
    .icon svg {
      transform: rotate(45deg);
    }
  }
}

</style>
