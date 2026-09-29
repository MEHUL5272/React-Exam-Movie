import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { fetchMovieDetails } from "../redux/actions/movieActions";
import MovieDetails from "../components/MovieDetails";

function MovieDetailsPage() {
  const { imdbID } = useParams();

  const dispatch = useDispatch();

  const movie = useSelector((state) => state.moviesData.movieDetails);
  const loading = useSelector((state) => state.moviesData.detailsLoading);
  const error = useSelector((state) => state.moviesData.detailsError);

  useEffect(() => {
    dispatch(fetchMovieDetails(imdbID));
  }, [dispatch, imdbID]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h2>Loading Movie Details...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Something went wrong!</h2>
        <p>{error}</p>

        <Link to="/movies" className="back-button">
          Back to Movies
        </Link>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="error-container">
        <h2>Movie details not found.</h2>

        <Link to="/movies" className="back-button">
          Back to Movies
        </Link>
      </div>
    );
  }

  return <MovieDetails movie={movie} />;
}

export default MovieDetailsPage;