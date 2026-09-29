import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ADD_WATCHLIST,
  REMOVE_WATCHLIST,
} from "../actions/preferenceActions";

const initialState = {
  favorites: [],
  watchlist: [],
};

const preferenceReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [
          ...state.favorites,
          action.payload,
        ],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };

    case ADD_WATCHLIST:
      return {
        ...state,
        watchlist: [
          ...state.watchlist,
          action.payload,
        ],
      };

    case REMOVE_WATCHLIST:
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default preferenceReducer;