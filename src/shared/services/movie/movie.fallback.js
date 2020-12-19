import ApiService from '@core/providers/api.service.provider';
export default class MovieFallback {
  ApiService;
  movieState;
  constructor(movieState = {}) {
    this.movieState = movieState;
    this.ApiService = ApiService('main', process.env.VUE_APP_MAIN_API_KEY);
  }
  

  fetchList(listName, params = { page: 1 }, method = 'get') {
    if (this.movieState.movieList.has(params.page)) {
      return Promise.resolve(
        this.movieState.movieList.get(params.page)
      );
    }
    return this.ApiService[method](`movie/${listName}`, params);
  }
  
}