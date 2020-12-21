import { isAfter, parseISO } from "date-fns";

export const moviesFilter = (moviesListResultArray, filters) => {
  if (filters.orderBy.orderFactor === 'vote_average') {
    return orderbyVoteAverage(moviesListResultArray, filters.orderBy.orientation );
  } else if (filters.orderBy.orderFactor === 'release_date') {
    return orderByReleaseDate(moviesListResultArray, filters.orderBy.orientation);
  }
  return moviesListResultArray;
}


const orderByReleaseDate = (moviesListResultArray, orientation = 1) => {
  orientation = parseInt(orientation, 10);
  return moviesListResultArray.sort(
    (a, b) => {
      if (isAfter( parseISO(b.release_date), parseISO(a.release_date))) {
        return 1*orientation;
      }
      if (isAfter( parseISO(a.release_date), parseISO(b.release_date))) {
        return -1*orientation;
      }
      return 0;
    }
  );
}

const orderbyVoteAverage = (moviesListResultArray, orientation = 1) => {
  orientation = parseInt(orientation, 10);
  return moviesListResultArray.sort(
    (a, b) => {
      if (a.vote_average < b.vote_average) {
        return 1*orientation;
      }
      if (a.vote_average > b.vote_average) {
        return -1*orientation;
      }
      return 0;
    }
  );
}
