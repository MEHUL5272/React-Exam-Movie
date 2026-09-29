  import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";

  import { fetchPopularMovies } from "../redux/actions/movieActions";

  import MovieDetails from "./MovieDetails";

  function MovieList() {
    const dispatch = useDispatch();

    const {
      popularMovies,
      popularLoading,
      popularError,
    } = useSelector((state) => state.moviesData);

    useEffect(() => {
      dispatch(fetchPopularMovies());
    }, [dispatch]);

    if (popularLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h2>Loading Popular Movies...</h2>
      </div>
    );
  }

  if (popularError) {
    return (
      <div className="error-container">
        <h2>Unable to Load Movies</h2>
        <p>{popularError}</p>
      </div>
    );
  }

    return (
      <div className="movie-container">
        {popularMovies && popularMovies.length > 0 ? (
          popularMovies.map((movie) => (
            <MovieDetails
              key={movie.imdbID}
              movie={movie}
            />
          ))
        ) : (
          <p>No popular movies found.</p>
        )}
      </div>
    );
  }

  export default MovieList;