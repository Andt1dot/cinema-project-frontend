import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/Auth";

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem("token") ? true : false,
};

const Auth = (state = initialState, action) => {
  //console.log("action: ", action.type);
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
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
