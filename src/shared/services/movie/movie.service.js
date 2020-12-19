import ApiService from '@core/providers/api.service.provider';
import MovieFallback from './movie.fallback';
export default class MovieService 
{
  ApiService;
  MovieFallback;
  
  constructor() {
    this.ApiService = ApiService('main',process.env.MAIN_API_KEY);
    this.MovieFallback = new MovieFallback();
  }

  fetchList(listName, params = { page: 1 }) {
    return this.MovieFallback.fetchList(
      listName,
      params,
      this.ApiService.get
    );
  }

  
}

  