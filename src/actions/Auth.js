import axios from "axios";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const requestLogin = (email, password) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  const response = await axios
    .post("http://localhost:4000/api/auth/login", {
      email: email,
      password: password,
    })
    .then((user) => {
      console.log("user: ", user);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user.data,
      });

      localStorage.setItem("token", user.data.token);
      localStorage.setItem("isAdmin", user.data.role);
    })
    .catch((error) => {
      // console.log("eroare", error.request.response);
      console.log("eroare", error.request.response);
      // if (response) {
      //   console.log('eroare',response);
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.request.response.split("%")[1],
      });
    });
};
