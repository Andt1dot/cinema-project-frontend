import {
  FETCH_PREMIERE_SUCCES,
  //FETCH_PREMIERE_LOADING,
  FETCH_PREMIERE_FAILURE,
} from "../actions/Premiere";

const initialState = {
  premieres: [],
  error: "",
};

const Premiere = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PREMIERE_SUCCES:
      return {
        ...state,
        premieres: [...state.premieres, action.payload],
      };
    case FETCH_PREMIERE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default Premiere;