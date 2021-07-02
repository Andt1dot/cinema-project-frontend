import React, { useEffect } from "react";
import { getMovies } from "../../actions/Movie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
        movies.map((movie) => {
          return <div key={movie._id}>{movie.title}</div>;
        })
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default MoviesList;
