import axios from "axios";
export const CHECK_REGISTER_REQUEST = "CHECK_REGISTER_REQUEST";
export const CHECK_REGISTER_SUCCESS = "CHECK_REGISTER_SUCCESS";
export const CHECK_REGISTER_FAILURE = "CHECK_REGISTER_FAILURE";

const CheckRegister = () => async (dispatch) => {
  dispatch({
    type: CHECK_REGISTER_REQUEST,
  });

  await axios
    .get("http://localhost:4000/api/auth/check-auth", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((user) => {
      dispatch({
        type: CHECK_REGISTER_SUCCESS,
        payload: user.data,
      });

      //localStorage.setItem("token", user.data.token);
      // localStorage.setItem("isAdmin", user.data.role);
    })
    .catch((error) => {
      console.log("eroare", error.request.response);
      dispatch({
        type: CHECK_REGISTER_FAILURE,
      });
    });
};

export default CheckRegister;
