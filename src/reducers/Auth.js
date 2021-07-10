import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/Auth";

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  isAdmin: localStorage.getItem("isAdmin") === 0 ? false : true,
  errorMessage: "",
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case LOGIN_SUCCESS: {
      console.log("payload: ", action.payload.role);
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        isAdmin: action.payload?.role === 0 ? false : true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
        isAuthenticated: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default Auth;
