import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../actions/Movie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MovieCard from "../../components/MovieCard";
import FilterCustom from "../../components/FilterCustom";
import { useSearch } from "../../contexts/SearchContext";

const MoviesList = () => {
  const dispatch = useDispatch();
  const { filteredData } = useSearch();
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
              marginBottom: "30px",
            }}
          >
            <h2>Movies</h2>
            <FilterCustom
              addButtonTitle="Add Movie"
              pathName="/admin/movies/movie-add"
            />
          </div>
          {filteredData.map((movie) => {
            return (
              <Link
                to={`/admin/movies/${movie._id}`}
                key={movie._id}
                style={{ width: 250, marginLeft: 20, textDecoration: "none" }}
              >
                <MovieCard movie={movie} />
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
