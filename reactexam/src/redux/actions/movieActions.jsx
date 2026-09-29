import {
  searchMovies,
  getMovieDetails,
  getPopularMovies,
} from "../../services/movieApi";

export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const FETCH_MOVIE_DETAILS_REQUEST =
  "FETCH_MOVIE_DETAILS_REQUEST";

export const FETCH_MOVIE_DETAILS_SUCCESS =
  "FETCH_MOVIE_DETAILS_SUCCESS";

export const FETCH_MOVIE_DETAILS_FAILURE =
  "FETCH_MOVIE_DETAILS_FAILURE";

export const FETCH_POPULAR_REQUEST =
  "FETCH_POPULAR_REQUEST";

export const FETCH_POPULAR_SUCCESS =
  "FETCH_POPULAR_SUCCESS";

export const FETCH_POPULAR_FAILURE =
  "FETCH_POPULAR_FAILURE";

export const fetchMovies = (searchTerm) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_MOVIES_REQUEST,
    });

    try {
      const movies = await searchMovies(searchTerm);

      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: movies,
      });
    } catch (error) {
      dispatch({
        type: FETCH_MOVIES_FAILURE,
        payload: error.message,
      });
    }
  };
};


export const fetchMovieDetails = (imdbID) => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_MOVIE_DETAILS_REQUEST,
    });

    try {
      const movie = await getMovieDetails(imdbID);

      dispatch({
        type: FETCH_MOVIE_DETAILS_SUCCESS,
        payload: movie,
      });
    } catch (error) {
      dispatch({
        type: FETCH_MOVIE_DETAILS_FAILURE,
        payload: error.message,
      });
    }
  };
};


export const fetchPopularMovies = () => {
  return async (dispatch) => {
    dispatch({
      type: FETCH_POPULAR_REQUEST,
    });

    try {
      const movies = await getPopularMovies();

      dispatch({
        type: FETCH_POPULAR_SUCCESS,
        payload: movies,
      });
    } catch (error) {
      dispatch({
        type: FETCH_POPULAR_FAILURE,
        payload: error.message,
      });
    }
  };
};