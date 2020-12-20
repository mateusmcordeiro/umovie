import { isAfter, parseISO } from "date-fns";

export const moviesFilter = (moviesListResultArray, filters) => {
  if (filters.orderBy.vote_average) {
    return orderbyVoteAverage(moviesListResultArray);
  } else if (filters.orderBy.release_date) {
    return orderByReleaseDate(moviesListResultArray);
  }
  return moviesListResultArray;
}


const orderByReleaseDate = (moviesListResultArray) => {
  return moviesListResultArray.sort(
    (a, b) => {
      if (isAfter( parseISO(b.release_date), parseISO(a.release_date))) {
        return 1;
      }
      if (isAfter( parseISO(a.release_date), parseISO(b.release_date))) {
        return -1;
      }
      return 0;
    }
  );
}

const orderbyVoteAverage = (moviesListResultArray) => {
  return moviesListResultArray.sort(
    (a, b) => {
      if (a.vote_average < b.vote_average) {
        return 1;
      }
      if (a.vote_average > b.vote_average) {
        return -1;
      }
      return 0;
    }
  );
}
