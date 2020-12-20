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
        {data: this.movieState.movieList.get(params.page)}
      );
    }
    return this.ApiService[method](`movie/${listName}`, params);
  }

  async get(movieId) {
    const movie = await this.getMovie(movieId);
    const credits = await this.getMovieCredits(movieId);
    return { movie, credits };
  }

  getMovie(movieId) {
    if (this.movieState.movieInfos.has(movieId)) {
      return Promise.resolve(
        {data: this.movieState.movieInfos.get(movieId)}
      );
    }
    return this.ApiService.get(`movie/${movieId}`,{ language: 'pt-br' });
  }

  getMovieCredits(movieId) {
    if (this.movieState.movieCredits.has(movieId)) {
      return Promise.resolve(
        {data: this.movieState.movieCredits.get(movieId)}
      );
    }
    return this.ApiService.get(`movie/${movieId}/credits`);
  }


  
}