import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchMovies } from "../redux/actions/movieActions";

function MovieSearch() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() !== "") {
        dispatch(fetchMovies(search));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search, dispatch]);

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="input-group">
            <span className="input-group-text bg-dark text-white">
              🔍
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Search movies..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSearch;