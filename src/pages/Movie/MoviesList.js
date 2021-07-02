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

  /*const renderMoviesList = <div>(
     {if(loading){
      
    }
    else if(movies){
      movies.map((movie) => {
        return <div key={movie._id}>{movie.title}</div>;
      })
    }else{
      <div>{error}</div>
    }}
    )
   
  </div>*/

  console.log("geting movies: ", movies);
  return <></>;
};

export default MoviesList;
