<template>
  <button class="button" :class="{'loading': loadingMovies}" ref="infiniteScrollButtonRef" @click="loadMoreItems">
    {{ buttonText }}
  </button>
</template>

<script>
import { useState } from '@state/movie';
import { computed, onMounted, onUnmounted,  ref } from 'vue';
import MovieService from '#services/movie';
export default {
  setup() {
    const loadingMovies = ref(false);
    const state = useState();
    const infiniteScrollButtonRef = ref(null);
    const { movieList, pagination } = state;
    const buttonText = computed(() => {
      return loadingMovies.value ? 'Carregando...' : 'Carregar mais';
    });

    const loadMoreItems = () => {
      loadingMovies.value = true;
      MovieService.use(state).fetchList('now_playing', { page: pagination.page + 1, language: 'pt-br' }).then(
        ({data}) => {
          movieList.set(data.page, data);
          pagination.page = data.page;
        }
      ).finally(
        () => {
          loadingMovies.value = false;
        }
      );
    }
    const handleScroll = () => {
      const mouseOnBottom =  document.documentElement.scrollTop + window.innerHeight >= infiniteScrollButtonRef.value.offsetTop + infiniteScrollButtonRef.value.offsetHeight + 10;
      if (mouseOnBottom) {
        loadMoreItems()
      }
    }

    onMounted(
      () => {
        window.addEventListener('scroll', handleScroll);
      }
    ) 
    
    onUnmounted(
      () => {
        window.removeEventListener('scroll', handleScroll);
      }
    ) 
    return {
      loadingMovies,
      infiniteScrollButtonRef,
      buttonText,
      loadMoreItems
    }
  }
  
}
</script>

<style lang="scss" scoped>
@import "@design";
.button {
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
</style>