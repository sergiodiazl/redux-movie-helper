import {
  REQUEST_MOVIE_LIST,
  RECEIVE_MOVIE_LIST,
  REQUEST_GENRE_LIST,
  RECEIVE_GENRE_LIST,
  GENRE_SELECTED,
  SLIDER_CHANGED,
  GENERATE_MOVIE_LIST_URL,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  REQUEST_MOVIE,
  RECEIVE_MOVIE,
  ERROR_MOVIE_LIST,
  ERROR_MOVIE,
  ERROR_GENRE_LIST,
  LOCALE_CHANGE
} from '../actions/actionTypes';
import es from '../i18n/es';
import en from '../i18n/en';
import ru from '../i18n/ru';
import initialState from '../initialState';
const texts={es,en,ru};

const mapMovieList = movieList => {
  const movies = movieList.results.map(result => {
    const {
      vote_count,
      id,
      genre_ids,
      poster_path,
      title,
      vote_average,
      release_date
    } = result;
    return {
      vote_count,
      id,
      genre_ids,
      poster_path,
      title,
      vote_average,
      release_date
    };
  });
  return movies;
};
const movieList = state => {
  console.log('entered movie url function');

  const { year, rating, runtime, page, genre, locale } = state;
  console.log(state);
  //Add genres if selected
  let genreId = '';
  if (Object.getOwnPropertyNames(genre).length > 0) {
    genreId = `with_genres=${genre.value}`;
  }
  /*https://api.themoviedb.org/3/discover/movie?api_key=APIKEY&
  language=LOCALE&sort_by=popularity.desc&
  with_genres=12&
  primary_release_date.gte=2000-01-01&
  primary_release_date.lte=2018-12-31&
  vote_average.gte=&
  vote_average.lte=10
  &with_runtime.lte=120
  &page=1
  */
  const moviesUrl =
    `https://api.themoviedb.org/3/discover/movie?` +
    `api_key=${process.env.REACT_APP_TMDB_API_KEY}&` +
    `language=${locale}&sort_by=popularity.desc&` +
    `${genreId}&` +
    `primary_release_date.gte=${year.value.min}-01-01&` +
    `primary_release_date.lte=${year.value.max}-12-31&` +
    `vote_average.gte=${rating.value.min}&` +
    `vote_average.lte=${rating.value.max}&` +
    `runtime.gte=${runtime.value.min}&` +
    `runtime.lte=${runtime.value.max}&` +
    `page=${page}`;
  console.log(moviesUrl)
  return moviesUrl;
};


const loadTexts = (locale ) => {
  console.log('load text');
  console.log(texts[locale]);
  return texts[locale]
  
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOVIE_LIST:
      return { ...state, loadingMovies: true, movies: [] };

    case RECEIVE_MOVIE_LIST:
      return {
        ...state,
        movies: mapMovieList(action.payload.movieList),
        totalPages: action.payload.movieList.total_pages,
        loadingMovies: false
      };
    case ERROR_MOVIE_LIST:
      return {
        ...state,
        loadingMovies: false,
        errorMovies: action.payload.error
      };
    case REQUEST_GENRE_LIST:
      return { ...state, loadingGenres: true };
    case RECEIVE_GENRE_LIST:
      return {
        ...state,
        genres: action.payload.genreList.genres,
        loadingGenres: false
      };
    case ERROR_GENRE_LIST:
      return { ...state, errorGenre: action.payload.error };
    case REQUEST_MOVIE:
      return { ...state, loadingMovie: true, movie: {} };
    case RECEIVE_MOVIE:
      return { ...state, movie: action.payload.movie, loadingMovie: false };
    case ERROR_MOVIE:
      return {
        ...state,
        loadingMovie: false,
        errorMovie: action.payload.error
      };
    case GENERATE_MOVIE_LIST_URL:
      return { ...state, moviesUrl: movieList(state) };
    case GENRE_SELECTED:
      return { ...state, genre: action.payload.genre };
    case SLIDER_CHANGED:
      return {
        ...state,
        [action.payload.slider.type]: {
          ...state[action.payload.slider.type],
          value: action.payload.slider.value
        }
      };
    case NEXT_PAGE:
      return { ...state, page: state.page + 1 };
    case PREVIOUS_PAGE:
      return { ...state, page: state.page - 1 };
    case LOCALE_CHANGE:
      return {
        ...state,
        locale: action.payload.locale,
        texts: loadTexts(action.payload.locale)
      };

    default:
      return state;
  }
};

export default reducer;
/*{
type: 'SLIDER_CHANGED',
payload:{slider:{type:'year',value:{min:1980,max:1985}}}
}
*/
