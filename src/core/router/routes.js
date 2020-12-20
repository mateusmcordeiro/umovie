import Home from '@views/Home.vue';
import Movie from '@views/Movie.vue';
import _404 from '@views/_404.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/movie/:movieId',
    name: 'movie',
    component: Movie,
    props: true,
  },
  {
    path: '/404',
    name: '404',
    component: _404,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
  },
]