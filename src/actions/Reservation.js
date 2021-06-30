import axios from "axios";
export const FETCH_RESERVATIONS_SUCCES = "FETCH_RESERVATIONS_SUCCES";
export const FETCH_RESERVATIONS_LOADING = "FETCH_RESERVATIONS_LOADING";
export const FETCH_RESERVATIONS_FAILURE = "FETCH_RESERVATIONS_FAILURE";

const fetchReservationsPremiere =
  (premiere_id, cinema_id, hall_id, params) => async (dispatch) => {
    dispatch({
      type: FETCH_RESERVATIONS_LOADING,
    });

    axios
      .get(
        `http://localhost:4000/api/reservations/${premiere_id}/${cinema_id}/${hall_id}${params}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((reservation) => {
        dispatch({
          type: FETCH_RESERVATIONS_SUCCES,
          payload: reservation.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_RESERVATIONS_FAILURE,
          payload: "Error fetch reservation",
        });
      });
  };

export default fetchReservationsPremiere;
