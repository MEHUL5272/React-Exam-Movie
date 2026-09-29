import API from "./api";

// Search Movies
export const searchMovies = async (searchTerm) => {
  const response = await API.get("", {
    params: {
      s: searchTerm,
      type: "movie",
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }

  return response.data.Search;
};

// Get Movie Details
export const getMovieDetails = async (imdbID) => {
  const response = await API.get("", {
    params: {
      i: imdbID,
      plot: "full",
    },
  });

  if (response.data.Response === "False") {
    throw new Error(response.data.Error);
  }

  return response.data;
};

// Get Popular Movies
export const getPopularMovies = async () => {
  const popularMovieIds = [
    "tt0111161",
    "tt0068646",
    "tt0468569",
    "tt0071562",
    "tt0050083",
    "tt0108052",
    "tt0167260",
    "tt0137523",
  ];

  const movieRequests = popularMovieIds.map((id) =>
    getMovieDetails(id)
  );

  const movies = await Promise.all(movieRequests);

  return movies;
};