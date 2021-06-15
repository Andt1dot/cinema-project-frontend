import { FETCH_PREMIERE_SUCCES, FETCH_PREMIERE_FAILURE } from "../actions/Home";

const initialState = {
  premieres: [],
  error: "",
};

const Home = (state = initialState, action) => {
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
