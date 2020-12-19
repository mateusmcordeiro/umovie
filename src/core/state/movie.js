import { reactive, provide, inject } from 'vue';

export const stateSymbol = Symbol('state');
export const createState = () => reactive({ 
  movieInfoDictionary: new Map(),
  movieList: new Map(),
  pagination: {
    page: 1
  }
});

export const useState = () => inject(stateSymbol);
export const provideState = () => provide(
  stateSymbol, 
  createState()
);
