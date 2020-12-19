import MovieFallback from './movie.fallback';
export default class MovieService 
{
  MovieFallback;
  
  constructor() {
    this.MovieFallback = new MovieFallback();
  }

  use(state) {
    this.MovieFallback = new MovieFallback(state);
    const fallback = this.MovieFallback;
    return {
      fetchList(listName, params = { page: 1 }) {
        return fallback.fetchList(
          listName,
          params,
          'get'        
        );
      }
    }
  
  }
  
  
}

  