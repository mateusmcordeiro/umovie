import { reactive, provide, inject } from 'vue';

export const stateSymbol = Symbol('state');
export const createState = () => reactive({ 
  movieInfos: new Map(),
  movieCredits: new Map(),
  movieList: new Map(),
  pagination: {
    loading: false,
    page: 1
  },
  filters: {
    orderBy: {
      orderFactor: '',
      orientation: 1
    }
    
  },
});

export const useState = () => inject(stateSymbol);
export const provideState = () => provide(
  stateSymbol, 
  createState()
);
