<template>
  <BaseCard @click="redirectToMovie">
    <template v-slot:header>
      <div class="header__content">
        <div class="progress__bar" >
          <div class="progress" :style="{'width': votesToDecimal}"></div>
        </div>
        <BaseIcon>
          <template v-slot:svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/></svg>
          </template>
        </BaseIcon>
        
      </div>
      <img :src="posterImage">
    </template>
    <template v-slot:body>
      <p class="card__title">{{ props.title }}</p>
      <p class="card__description">
        {{ dateFormatted }}
      </p>
    </template>
    <template v-slot:icon>
      <BaseIcon>
        <template v-slot:svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z"/></svg>
        </template>
      </BaseIcon>
    </template>
  </BaseCard>
</template>
<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import BaseCard from './base/BaseCard';
import BaseIcon from './base/BaseIcon.vue';
import { formatDateWithMonthLiteral } from '../utils/filters/dateFilter.util';

export default {
  props: {
    title: String,
    description: String,
    image: String,
    votes: Number,
    movieId: Number
  },
  components: {
    BaseCard,
    BaseIcon  
  },
  setup(props) {      
    const router = useRouter();
    const redirectToMovie = () => {
      router.push(
        { 
          name: 'movie', 
          params: { 
            movieId: props.movieId
        } 
      })
    }
    const posterImage = computed(() => `//image.tmdb.org/t/p/w220_and_h330_face${props.image}`)
    const dateFormatted = computed(() => formatDateWithMonthLiteral(props.description));
    const votesToDecimal = computed(() => `${props.votes * 10}%`);
    return { props, redirectToMovie, posterImage, dateFormatted, votesToDecimal }
  }
}
</script>

<style lang="scss" scoped>
  @import "@design";
  .card {
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
