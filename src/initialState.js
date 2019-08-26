
import es from './i18n/es';
export default  {
    loadingGenres:false,
    loadingMovies:false,
    loadingMovie:false,
    movies: [],
    error:null,
    totalPages: 1,
    page: 1,
    moviesUrl: "",
    genre: {},
    movie:{},
    genres: [],
    locale:'es-mx',
  texts: es,
    year: {
      label: 'year',
      min: 1940,
      max: 2020,
      step: 1,
      value: { min: 2000, max: 2018 }
    },
    rating: {
      label: 'rating',
      min: 0,
      max: 10,
      step: 1,
      value: { min: 8, max: 10 }
    },
    runtime: {
      label: 'runtime',
      min: 0,
      max: 300,
      step: 15,
      value: { min: 60, max: 120 }
    },
}