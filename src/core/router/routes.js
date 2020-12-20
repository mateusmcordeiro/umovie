import Home from '@views/Home.vue';
import Movie from '@views/Movie.vue';
import _404 from '@views/_404.vue';

export default [
  {
    path: '/umovie/',
    name: 'home',
    component: Home,
  },
  {
    path: '/umovie/movie/:movieId',
    name: 'movie',
    component: Movie
  },
  {
    path: '/umovie/404',
    name: '404',
    component: _404,
    props: true,
  },
  {
    path: '/umovie/:pathMatch(.*)*',
    redirect: '/umovie/404',
  },
]