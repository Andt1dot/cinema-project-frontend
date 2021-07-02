import axios from "axios";
export const ADD_MOVIE_SUCCESS = "ADD_MOVIE_SUCCESS";
export const ADD_MOVIE_FAILURE = "ADD_MOVIE_FAILURE";

export const addMovie = (data) => async (dispatch) => {
  //console.log("addMovieAction: ", data);
  await axios
    .post(
      "http://localhost:4000/api/movies",
      {
        title: data.title,
        original_title: data.original_title,
        genre: data.genre,
        director: data.director,
        release_date: data.release_date,
        rating: data.rating,
        description: data.description,
        actors: data.actors,
        age_restrict: data.age_restrict,
        duration: data.duration,
        image_url: data.image_url,
        video_url: data.video_url,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((movie) => {
      console.log("movie :", movie);
      console.log("movie.data", movie.data);
      console.log("movie.headers", movie.headers);
      console.log("movie.config", movie.config);
      dispatch({
        type: ADD_MOVIE_SUCCESS,
        payload: movie.data,
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: ADD_MOVIE_FAILURE,
        payload: "Error ocurred while adding new movie.",
      });
    });
};

export const GET_MOVIES_LOADING = "GET_MOVIES_LOADING";
export const GET_MOVIES_SUCCESS = "ET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

export const getMovies = () => async (dispatch) => {
  dispatch({ type: GET_MOVIES_LOADING });

  axios
    .get("http://localhost:4000/api/movies", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((movies) => {
      dispatch({
        type: GET_MOVIES_SUCCESS,
        payload: movies.data,
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: GET_MOVIES_FAILURE,
        payload: "Error.Could not get movies.",
      });
    });
};

export const EDIT_MOVIE_SUCCESS = "EDIT_MOVIE_SUCCESS";
export const EDIT_MOVIE_FAILURE = "EDIT_MOVIE_FAILURE";

export const editMovie = (data, movie_id) => async (dispatch) => {
  axios
    .put(
      `http://localhost:4000/api/movies${movie_id}`,
      {
        title: data.title,
        original_title: data.original_title,
        genre: data.genre,
        director: data.director,
        release_date: data.release_date,
        rating: data.rating,
        description: data.description,
        actors: data.actors,
        age_restrict: data.age_restrict,
        duration: data.duration,
        image_url: data.image_url,
        video_url: data.video_url,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((updatedMovie) => {
      dispatch({
        type: EDIT_MOVIE_SUCCESS,
        payload: updatedMovie,
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: EDIT_MOVIE_FAILURE,
        payload: "Error.Could not edit movie.",
      });
    });
};

export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const DELETE_MOVIE_FAILURE = "DELETE_MOVIE_FAILURE";

export const deleteMovie = (movie_id) => async (dispatch) => {
  axios
    .delete(`http://localhost:4000/api/movies${movie_id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then(() => {
      dispatch({
        type: DELETE_MOVIE_SUCCESS,
        payload: "The movie was successfully deleted.",
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({
        type: DELETE_MOVIE_FAILURE,
        payload: "Error.Could not delete movie.",
      });
    });
};
