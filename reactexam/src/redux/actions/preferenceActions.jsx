export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const ADD_WATCHLIST = "ADD_WATCHLIST";
export const REMOVE_WATCHLIST = "REMOVE_WATCHLIST";

export const addFavorite = (movie) => ({
  type: ADD_FAVORITE,
  payload: movie,
});

export const removeFavorite = (imdbID) => ({
  type: REMOVE_FAVORITE,
  payload: imdbID,
});

export const addWatchlist = (movie) => ({
  type: ADD_WATCHLIST,
  payload: movie,
});

export const removeWatchlist = (imdbID) => ({
  type: REMOVE_WATCHLIST,
  payload: imdbID,
});