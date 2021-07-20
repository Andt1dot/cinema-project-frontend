import axios from "axios";
// export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
// export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
// export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";

export const requestResetPassword = async (email) => {
  return await axios
    .post("http://localhost:4000/api/auth/request/reset-password", {
      email,
    })
    .then((user) => {
      return user.data;

      //localStorage.setItem("token", user.data.token);
      // localStorage.setItem("isAdmin", user.data.role);
    })
    .catch((error) => {
      return JSON.parse(error.request.response);
    });
};

export const resetPassword = async (user_id, new_password) => {
  console.log(user_id,new_password)
  return await axios
    .patch("http://localhost:4000/api/auth/reset-password/", {
      user_id,
      new_password,
    })
    .then((response) => {
      console.log("responeChangePassword", response);
    });
};
