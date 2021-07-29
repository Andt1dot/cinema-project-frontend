import axios from "axios";
export const TICKET_SUCCES = "TICKET_SUCCES";
export const TICKET_LOADING = "TICKET_LOADING";
export const TICKET_FAILURE = "TICKET_FAILURE";

const generateTicket =
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
