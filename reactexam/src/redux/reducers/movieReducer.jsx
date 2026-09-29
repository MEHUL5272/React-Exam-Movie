import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIE_DETAILS_REQUEST,
  FETCH_MOVIE_DETAILS_SUCCESS,
  FETCH_MOVIE_DETAILS_FAILURE,
  FETCH_POPULAR_REQUEST,
  FETCH_POPULAR_SUCCESS,
  FETCH_POPULAR_FAILURE,
} from "../actions/movieActions";

const initialState = {
  movies: [],
  popularMovies: [],
  movieDetails: null,

  loading: false,
  detailsLoading: false,
  popularLoading: false,

  error: null,
  detailsError: null,
  popularError: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

   
    case FETCH_MOVIE_DETAILS_REQUEST:
      return {
        ...state,
        detailsLoading: true,
        detailsError: null,
      };

    case FETCH_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        detailsLoading: false,
        movieDetails: action.payload,
      };

    case FETCH_MOVIE_DETAILS_FAILURE:
      return {
        ...state,
        detailsLoading: false,
        detailsError: action.payload,
      };

    
    case FETCH_POPULAR_REQUEST:
      return {
        ...state,
        popularLoading: true,
        popularError: null,
      };

    case FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        popularLoading: false,
        popularMovies: action.payload,
      };

    case FETCH_POPULAR_FAILURE:
      return {
        ...state,
        popularLoading: false,
        popularError: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;