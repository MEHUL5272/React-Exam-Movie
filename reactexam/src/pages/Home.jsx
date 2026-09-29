function Home() {
  return (
    <div className="container">
      <div className="text-center py-5">

        <h1 className="display-3 fw-bold">
          Movie Library
        </h1>

        <p className="lead text-secondary">
          Discover popular movies and find your
          favorite films.
        </p>

        <a
          href="/movies"
          className="btn btn-primary btn-lg mt-3"
        >
          Explore Movies
        </a>

      </div>
    </div>
  );
}

export default Home;