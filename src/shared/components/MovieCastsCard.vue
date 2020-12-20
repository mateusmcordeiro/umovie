
<template>
  <BaseCard>
    <template v-slot:header>
      <img :src="image">
    </template>
    <template v-slot:body>
      <p class="card__title">{{ props.cast.character }}</p>
      <p class="card__description">
        {{ props.cast.name }}
        
      </p>
    </template>
  </BaseCard>
</template>

<script>
import { computed } from 'vue';
import BaseCard from './base/BaseCard';

export default {
  props: ['cast'],
  components: {
    BaseCard
  },
  setup(props) {      
    const image = computed(() => {
      return `https://image.tmdb.org/t/p/w220_and_h330_face${props.cast.profile_path}`
    })
    return { props, image }
  }
}
</script>

<style lang="scss" scoped>
  @import "@design";
  .card {
    .card__header {
      display: flex;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      img {
        height: 220px;
      }
    }
    p {
      margin: 0;
    }
    .card__title {
      @extend %typography-small-heading;
      margin-top: 4px;
    }
    .card__description {
      @extend %typography-small;
    }
    .card__body.card__container {
      .icon {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: $primary-color;
        z-index: $layer-tooltip-z-index;
        svg {
          width: 40px;
          height: 40px;
        }
      }
    }
    .header__content {
      .progress__bar {
        position: absolute;
        width: 100%;
        height: 4px;
        content: ' ';
        background-color: $dark-color;
        
        .progress {
          position: absolute;
          height: 4px;
          background: linear-gradient(90deg, $secondary-color 0%, $primary-color 100%);
          z-index: $layer-tooltip-z-index;
        }
      }
      .icon {
        position: absolute;
        right: 10px;
        top: 10px;
        fill: $primary-color;
        width: 30px;
        height: 30px;
        background: $dark-color;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        opacity: 1;
        transition: opacity .2s;
        svg {
          height: 15px;
        }
      }
      
      
    }
    &:hover {
      .header__content {
        .icon {
          opacity: 0;
        }
      }
    }
  }
  
</style>
