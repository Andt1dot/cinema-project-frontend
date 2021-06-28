import axios from "axios";
export const FETCH_SEATS_SUCCES = "FETCH_SEATS_SUCCES";
export const FETCH_SEATS_LOADING = "FETCH_SEATS_LOADING";
export const FETCH_SEATS_FAILURE = "FETCH_SEATS_FAILURE";

const fetchSeatsPremiere = () => async (dispatch) => {
  dispatch({
    type: FETCH_SEATS_LOADING,
  });

  axios
    .get("http://localhost:4000/api/seats", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((seat) => {
      dispatch({
        type: FETCH_SEATS_SUCCES,
        payload: seat.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_SEATS_FAILURE,
        payload: "Error fetch seats",
      });
    });
};

export default fetchSeatsPremiere;
