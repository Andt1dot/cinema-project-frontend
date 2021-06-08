const axios = require("axios");
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const requestLogin = (email, password) => (dispatch) => {
    console.log("sdsdssdsd")
//   axios
//     .post("localhost:4000/api/auth/login", {
//       email: email,
//       password: password,
//     })
//     .then((user) => {
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: user,
//       });

//       console.log(user);
//     })
//     .catch(Error);
//   {
//     console.log(Error.message);
//   }

  //     return {
  //     type: LOGIN_REQUEST,
  //     isFetching: true,
  //     isAuthenticated: false,
  //     creds,
  //   };
};

const receiveLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  };
};

const loginError = (message) => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  };
};

// export function logoutUser() {
//   return (dispatch) => {
//     dispatch(requestLogout());
//     localStorage.removeItem("id_token");
//     localStorage.removeItem("access_token");
//     dispatch(receiveLogout());
//   };
// }
