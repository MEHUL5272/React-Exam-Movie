import { useSelector } from "react-redux";

import MovieSearch from "../components/MovieSearch";
import MovieList from "../components/MovieList";

function Movies() {
  const movies = useSelector((state) => state.moviesData.movies);
  const loading = useSelector((state) => state.moviesData.loading);
  const error = useSelector((state) => state.moviesData.error);

  return (
    <div>
      <MovieSearch />

      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <h2>Searching Movies...</h2>
        </div>
      )}

      {error && (
        <div className="error-container">
          <h2>Search Error</h2>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
}

export default Movies;
