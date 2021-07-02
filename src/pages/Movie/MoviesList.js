import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../actions/Movie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MovieCard from "../../components/MovieCard";

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

  console.log("get movies: ", movies);
  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : !loading && movies ? (
        <div className="row">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="btn btn-sm btn-outline-secondary">Filter</button>
            <span style={{ padding: 10, fontSize: "30px" }}>Movies</span>
            <Link to="/admin/movies/movie-add">
              {" "}
              <button className="btn btn-sm btn-outline-secondary">Add</button>
            </Link>
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
