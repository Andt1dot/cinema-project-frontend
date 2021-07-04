import axios from "axios";
export const FETCH_RESERVATIONS_SUCCES = "FETCH_RESERVATIONS_SUCCES";
export const FETCH_RESERVATIONS_LOADING = "FETCH_RESERVATIONS_LOADING";
export const FETCH_RESERVATIONS_FAILURE = "FETCH_RESERVATIONS_FAILURE";
export const ADD_RESERVATIONS_SUCCES = "ADD_RESERVATIONS_SUCCES";
export const ADD_RESERVATIONS_LOADING = "ADD_RESERVATIONS_LOADING";
export const ADD_RESERVATIONS_FAILURE = "ADD_RESERVATIONS_FAILURE";

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

export const addReservation =
  (seats, premiere, reserv_date, reserv_hour, total_price) =>
  async (dispatch) => {
    // console.log("seats", seats);
    // console.log("premiere", premiere);
    // console.log("reserv_date", reserv_date);
    // console.log("reserv_hour", reserv_hour);
    // console.log("total_price", total_price);

    dispatch({
      type: ADD_RESERVATIONS_LOADING,
    });

    axios
      .post(
        "http://localhost:4000/api/reservations/",
        {
          seats: seats,
          premiere: premiere,
          reserv_date: reserv_date,
          reserv_hour: reserv_hour,
          total_price: total_price,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((reservation) => {
        console.log("reservationAction", reservation);
      })
      .catch((err) => {
        console.log(err);
      });
  };

export default fetchReservationsPremiere;
