import axios from "axios";
// export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
// export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
// export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";

const ResetPassword = async (email) => {
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

export default ResetPassword;
