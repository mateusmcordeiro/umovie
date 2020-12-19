import { useState } from '@state/movie';

export default class MovieFallback {
  movieState;
  constructor() {
    this.movieState = useState();
  }

  fetchList(listName, params = { page: 1 }, callback = () => {}) {
    if (this.movieState.movieList.has(params.page)) {
      return this.movieState.movieList.get(params.page);
    }
    return callback(`movies/${listName}`, params);
  }
  
}