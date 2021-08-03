import axios from "axios";
export const TICKET_SUCCES = "TICKET_SUCCES";
export const TICKET_LOADING = "TICKET_LOADING";
export const TICKET_FAILURE = "TICKET_FAILURE";

const generateTicket = (reservation, pay_type) => async (dispatch) => {
  dispatch({
    type: TICKET_LOADING,
  });

  axios
    .post(
      `https://api-olymp-cinema.herokuapp.com/api/tickets`,
      {
        reservation,
        pay_type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
    .then((ticket) => {
      dispatch({
        type: TICKET_SUCCES,
        payload: ticket.data,
      });
      console.log("ticket", ticket);
    })
    .catch((err) => {
      dispatch({
        type: TICKET_FAILURE,
        payload: "Error create ticket",
      });
    });
};

export default generateTicket;
