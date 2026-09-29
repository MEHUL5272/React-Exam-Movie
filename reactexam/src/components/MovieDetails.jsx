function MovieDetails({ movie }) {
  return (
    <div className="container py-5">
      <div className="card bg-dark text-white border-0 shadow-lg">
        <div className="row g-0">

          <div className="col-md-4">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "https://via.placeholder.com/300x450"
              }
              className="img-fluid rounded-start w-100"
              alt={movie.Title}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body p-4">

              <h1 className="card-title fw-bold">
                {movie.Title}
              </h1>

              <span className="badge bg-primary me-2">
                {movie.Year}
              </span>

              <span className="badge bg-warning text-dark">
                ⭐ {movie.imdbRating}
              </span>

              <hr />

              <p>
                <strong>Genre:</strong>{" "}
                {movie.Genre}
              </p>

              <p>
                <strong>Language:</strong>{" "}
                {movie.Language}
              </p>

              <p>
                <strong>Release Date:</strong>{" "}
                {movie.Released}
              </p>

              <p>
                <strong>Cast:</strong>{" "}
                {movie.Actors}
              </p>

              <p>
                <strong>Director:</strong>{" "}
                {movie.Director}
              </p>

              <p className="mt-4">
                <strong>Description:</strong>
              </p>

              <p className="text-secondary">
                {movie.Plot}
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieDetails;