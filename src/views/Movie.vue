<template>
    <header class="header banner">
      <div class="banner__backdrop" :style="{'background-image': movieBackgroundURL}"></div>
      <div class="container">
        <div class="row">
          <h1 class="logo" @click="goHome">
            <span>u</span>Movie
          </h1>
        </div>
        <div class="row movie__informations" v-if="movie">
          <div class="movie__image">
            <img :src="moviePosterImage"/>
          </div>
          <article>
            
            <div class="movie__infos block">
              <h1 class="block__title">
                {{ movie.title }}
              </h1>
              <p class="block__text">
                <span>{{ formatDateWithMonthLiteral(movie.release_date) }}</span>
              </p>
              <div class="block__content">
                <BaseBadge v-for="genre in movie.genres" :key="genre.id">
                  {{genre.name}}
                </BaseBadge>
              </div>
              <div class="block__content vote">
                <p class="title">Nota da população</p>
                <BaseProgress :percentage="movie.vote_average*10"/>
              </div>
              <div class="block__content">
                <p class="title">Sinopse</p>
                <p class="text">
                    {{ movie.overview }}
                </p>
              </div>
              <div class="block__content content__cast">
                <p class="title">Casts</p>
                <div class="casts">
                  <MovieCastsCard v-for="cast in movieCasts" :key="cast.id" :cast="cast"/>
                </div>
              </div>
            </div>
          </article>
          
        </div>
        
      </div>
  </header>
</template>

<script>
import { useRouter } from 'vue-router';
import { useState } from '@state/movie';
import MovieService from '#services/movie';
import { computed } from 'vue';
import { formatDateWithMonthLiteral } from '@utils/filters/dateFilter.util';
import BaseBadge  from '../shared/components/base/BaseBadge.vue';
import BaseProgress  from '../shared/components/base/BaseProgress.vue';
import MovieCastsCard from '@components/MovieCastsCard.vue';
export default {
  components: {
    BaseBadge,
    BaseProgress,
    MovieCastsCard
  },
  setup() {
    const state = useState();
    const router = useRouter();
    const { movieInfos, movieCredits } = state;
    const movieId = parseInt(
      window.location.pathname.substr(
        '/movie/'.length, window.location.pathname.length
      )
    ,10);
    MovieService.use(state).get(movieId).then(
      ({movie, credits}) => {
        movieInfos.set(movieId,movie.data)
        movieCredits.set(movieId,credits.data)
      }
    );
    const movie = computed(() => {
      return movieInfos.get(movieId);
    });
    const movieCasts = computed(() => {
      return movieCredits.get(movieId).cast;
    });
    const movieBackgroundURL = computed(() => {
      if(movie.value) {
        return `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.value.backdrop_path})`;
      }
      return '';
      
    })
    const moviePosterImage = computed(() => {
      if(movie.value) {
        return `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.value.poster_path}`;
      }
      return '';
    })

    const goHome = () => {
      router.push(
        { 
          name: 'home'
      })
    }
    
    return {movie, movieCasts, movieBackgroundURL, moviePosterImage, formatDateWithMonthLiteral, goHome}
  }
}
</script>

<style lang="scss" scoped>
@import "@design";
.movie__page {
  height: 100vh;
  background: $shark-color;
}
header {
  height: 100vh;
  position: relative;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    z-index: $layer-dropdown-z-index;
    display: flex;
    flex-direction: column;
  }
}
.banner__backdrop {
  left: 0;
  top: 0;
  position: fixed;
  background-size: cover;
  height: 400px;
  background-position: center;
  mix-blend-mode: hard-light;
  width: 100%;
  height: 100%;
  z-index: $layer-page-z-index;
  &:after {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    content: " ";
    background: linear-gradient(180deg, black 8%, rgba(0, 0, 0, 0.7371149143) 47%, rgba(0, 0, 0, 0.5830532897) 100%);
    transition: opacity 0.4s;
    z-index: 4;
  }
}
.movie__informations {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr ;
  column-gap: 40px;
  margin-left: auto;
  margin-right: auto;
  @include media-breakpoint-up(md) {
    grid-template-columns: 1fr 1fr;
  }
  @include media-breakpoint-up(xl) {
    grid-template-columns: 1fr 2fr;
  }
  
  .movie__image {
    img {
      @include media-breakpoint-down(md) {
        margin: 0 auto;
        display: flex;
      }
    }
  }
  .movie__infos {
     @include media-breakpoint-down(md) {
       margin-top: 20px;
     }
    .block__content {
      margin-top: 10px;
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      &.vote {
        max-width: 320px;
        .title {
          margin-bottom: 10px;
        }
      }
      .casts {
        display: flex;
        overflow-x: scroll;
        width: 100%;
        max-width: 784px;
        margin-top: 10px;
        .card {
          max-width: 148px;
          max-height: 222px;
          margin-right: 10px;
        }
      }

      .title {
        @extend %typography-small;
      }
      .text {
        @extend %typography-small;
        font-weight: 400;
        font-size: 14px;
      }
      &.content__cast {
        width: 300px;
        @include media-breakpoint-up(sm) {
          width: 400px;
        }
        @include media-breakpoint-up(md) {
          width: 320px;
        }
        @include media-breakpoint-up(lg) { 
          width: 500px;
        }
        @include media-breakpoint-up(xl) { 
          width: 700px;
        }
      }
    }
    .block__title {
      @extend %typography-large;
    }
    .block__text {
      @extend %typography-small;
      width: 100%;
      display: flex;
      align-items: center;
      .separator {
        width: 4px;
        height: 4px;
        background-color: $primary-color;
        content: ' ';
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 100%;
      }
      
    }
    .base__badge {
      @extend %typography-small;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 2px;
      margin-right: 6px;
      &:hover {
        color: $dark-color;
      }
    }
  }
  
}

</style>