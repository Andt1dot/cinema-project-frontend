import axios from "axios";
export const FETCH_PREMIERE_SUCCES = "FETCH_PREMIERE_SUCCES";
export const FETCH_PREMIERE_LOADING = "FETCH_PREMIERE_LOADING";
export const FETCH_PREMIERE_FAILURE = "FETCH_PREMIERE_FAILURE";

export const fetchPremiereMovies = () => async (dispatch) => {
  dispatch({
    type: FETCH_PREMIERE_LOADING,
  });
  console.log("Premiere is fetching");
  axios
    .get("http://localhost:4000/api/premieres")
    .then((premiere) => {
      console.log("premiere", premiere);
      dispatch({
        type: FETCH_PREMIERE_SUCCES,
        payload: premiere.data.map((el) => {
          return el;
        }),
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

