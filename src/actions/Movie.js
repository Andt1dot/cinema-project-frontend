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
