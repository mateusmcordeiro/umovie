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
      fetchList(listName, params = { page: 1, language: 'pt-br' }) {
        return fallback.fetchList(
          listName,
          params,
          'get'        
        );
      },
      getMovie(movieId){
        return fallback.getMovie(movieId);
      },
      getMovieCredits(movieId){
        return fallback.getMovieCredits(movieId);
      },
      get(movieId) {
        return fallback.get(movieId)
      }
    }
    
  
  }
  
  
}

  