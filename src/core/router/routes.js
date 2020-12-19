export default [
  {
    path: '/',
    name: '',
    component: () => lazyLoadView(import('@views/Home.vue')),
  },
  {
    path: '/movie/:movieId',
    name: 'movie',
    component: () => lazyLoadView(() => import('@views/Movie.vue')),
  },
  {
    path: '/404',
    name: '404',
    component: () => lazyLoadView(import('@views/_404.vue')),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '404',
  },
]


function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    loading: require('@views/_loading.vue').default,
    delay: 400,
    error: require('@views/_timeout.vue').default,
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children)
    },
  })
}