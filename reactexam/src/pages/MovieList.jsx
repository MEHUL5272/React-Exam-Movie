import { useNavigate } from "react-router-dom";

function MovieList({ movies }) {
  const navigate = useNavigate();

  return (
    <div className="movie-container">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div
            className="movie-card"
            key={movie.imdbID}
            onClick={() =>
              navigate(`/movie/${movie.imdbID}`)
            }
          >
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450"
              }
              alt={movie.Title}
              className="movie-poster"
            />

            <h3>{movie.Title}</h3>

            <p>{movie.Year}</p>
          </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default MovieList;