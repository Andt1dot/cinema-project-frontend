import {
    FETCH_RESERVATIONS_SUCCES,
    FETCH_RESERVATIONS_FAILURE,
  } from "../actions/Reservation";
  
  const initialState = {
    reservation: [],
    error: "",
  };
  
  const Reservation = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RESERVATIONS_SUCCES:
        return {
          ...state,
          reservations: action.payload,
        };
      case FETCH_RESERVATIONS_FAILURE: {
        return {
          ...state,
          error: action.payload,
        };
      }
      default:
        return state;
    }
  };
  
  export default Reservation;
  