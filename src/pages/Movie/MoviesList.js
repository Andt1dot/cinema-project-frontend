import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../actions/Movie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MovieCard from "../../components/MovieCard";
import "./style.css";

const MoviesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const { movies, loading, error } = useSelector((state) => ({
    movies: state.Movie.movies,
    error: state.Movie.error,
    loading: state.Movie.loading,
  }));

  //console.log("get movies: ", movies);
  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : !loading && movies ? (
        <div className="row">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <span
              style={{ padding: 10, fontSize: "30px", textAlign: "center" }}
            >
              Movies
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                {" "}
                <Link to="/admin/movies/movie-add">
                  <button
                    className="btn btn-secondary wrn-btn"
                    style={{ background: "green" }}
                  >
                    Add Movie
                  </button>
                </Link>
              </div>
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <input
                          type="text"
                          className="form-control search-slt"
                          placeholder="Genre"
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <input
                          type="text"
                          className="form-control search-slt"
                          placeholder="Release Date"
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <select
                          className="form-control search-slt"
                          id="exampleFormControlSelect1"
                        >
                          <option>Age Restrict</option>
                          <option>Example one</option>
                          <option>Example one</option>
                          <option>Example one</option>
                          <option>Example one</option>
                          <option>Example one</option>
                          <option>Example one</option>
                        </select>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <button className="btn btn-secondary wrn-btn">
                          Filter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {movies.map((movie) => {
            return (
              <Link
                to={`/admin/movies/${movie._id}`}
                key={movie._id}
                style={{ width: 250, marginLeft: 20 }}
              >
                {" "}
                <MovieCard movie={movie} />{" "}
              </Link>
            );
          })}
        </div>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default MoviesList;
