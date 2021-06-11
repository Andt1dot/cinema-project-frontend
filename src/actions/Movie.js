import axios from "axios";
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_FAILURE = "ADD_MOVIE_FAILURE";

export const addMovie = (data) => async (dispatch) => {
  await axios
    .post("http://localhost:4000/api/movies", { data })
    .then((movie) => {
      dispatch({
        type: ADD_MOVIE_SUCCESS,
        payload: movie,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_MOVIE_FAILURE,
        payload: "Error ocurred while adding new movie.",
      });
    });
};
