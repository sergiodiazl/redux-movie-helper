import {
  REQUEST_MOVIE_LIST,
  GENRE_SELECTED,
  RECEIVE_MOVIE_LIST,
  ERROR_MOVIE_LIST,
  RECEIVE_GENRE_LIST,
  REQUEST_GENRE_LIST,
  ERROR_GENRE_LIST,
  SLIDER_CHANGED,
  GENERATE_MOVIE_LIST_URL,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  ERROR_MOVIE,
  LOCALE_CHANGE
} from './actionTypes';

export const requestMovieList = () => ({
  type: REQUEST_MOVIE_LIST
});

export const receiveMovieList = movieList => ({
  type: RECEIVE_MOVIE_LIST,
  payload: { movieList }
});
export const errorMovieList = error => ({
  type: ERROR_MOVIE_LIST,
  payload: { error }
});
export const generateMovieListUrl = () => ({
  type: GENERATE_MOVIE_LIST_URL
});

export function fetchMovieList() {
  return function(dispatch, getState) {
    dispatch(requestMovieList());
    return fetch(getState().moviesUrl)
      .then(
        response => response.json(),
        error => {
          dispatch(errorMovieList(error));
          console.log('An error occurred.', error);
        }
      )
      .then(json => {
        dispatch(receiveMovieList(json));
      });
  };
}
export const requestGenreList = () => ({
  type: REQUEST_GENRE_LIST
});

export const receiveGenreList = genreList => ({
  type: RECEIVE_GENRE_LIST,
  payload: { genreList }
});
export const errorGenreList = error => ({
  type: ERROR_GENRE_LIST,
  payload: { error }
});
export function fetchGenreList(locale) {
  return function(dispatch) {
    dispatch(requestGenreList());
    return fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&&language=${locale}`
    )
      .then(
        response => response.json(),
        error => {
          dispatch(errorGenreList(error));
          console.log('An error occurred.', error);
        }
      )
      .then(json => {
        dispatch(receiveGenreList(json));
      });
  };
}
export const requestMovie = () => ({
  type: REQUEST_MOVIE
});
export const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  payload: { movie }
});
export const errorMovie = error => ({
  type: ERROR_MOVIE,
  payload: { error }
});
export function fetchMovie(movieId, locale) {
  return function(dispatch) {
    dispatch(requestMovie());
    return fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        process.env.REACT_APP_TMDB_API_KEY
      }&language=${locale}`
    )
      .then(
        response => response.json(),
        error => {
          dispatch(errorMovie(error));
          console.log('An error occurred.', error);
        }
      )
      .then(json => {
        dispatch(receiveMovie(json));
      });
  };
}
export const genreSelected = genre => ({
  type: GENRE_SELECTED,
  payload: { genre }
});
export const sliderChanged = slider => ({
  type: SLIDER_CHANGED,
  payload: { slider }
});
export const nextPage = () => ({
  type: NEXT_PAGE
});

export const previousPage = () => ({
  type: PREVIOUS_PAGE
});
export const localeChange = locale => ({
  type: LOCALE_CHANGE,
  payload: { locale }
});
