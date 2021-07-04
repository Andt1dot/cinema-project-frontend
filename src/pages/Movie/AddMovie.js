import React from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../../actions/Movie";
import MovieForm from "../../components/MovieForm";

const AddMovie = () => {
  const dispatch = useDispatch();

  const addNewMovie = (movie) => {
    dispatch(addMovie(movie));

    /*dispatch(addMovie(movie)).then(() => {
      history.push("/");
    });*/
  };

  return <MovieForm addNewMovie={addNewMovie} />;
};

export default AddMovie;
