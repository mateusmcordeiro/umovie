import { createApp } from 'vue'
import App from './App.vue'
import router from '@router';
import { stateSymbol, createState } from '@state/movie';
import './index.scss'

createApp(App)
  .use(router)
  .provide(stateSymbol, createState())
  .mount('#app');