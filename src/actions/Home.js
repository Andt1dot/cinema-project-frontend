import axios from "axios";
export const FETCH_PREMIERE_SUCCES = "FETCH_MOVIE_SUCCES";
export const FETCH_PREMIERE_FAILURE = "FETCH_MOVIE_SUCCES";

export const fetchPremiereMovies = (data) => async (dispatch) => {
  axios
    .get("http://localhost:4000/api/premieres")
    .then((premiere) => {
      console.log("premiere", premiere);
      dispatch({
        type: FETCH_PREMIERE_SUCCES,
        payload: premiere.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: FETCH_PREMIERE_FAILURE,
        payload: "Error fetch premieres",
      });
    });
};
