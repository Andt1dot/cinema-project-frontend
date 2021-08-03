import axios from "axios";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

const requestRegister =
  ({ firstname, lastname,username, age, email, password, mobile }) =>
  async (dispatch) => {
   
    console.log(firstname, lastname,username, age, email, password, mobile );
    dispatch({
      type: REGISTER_REQUEST,
    });

     await axios
      .post("https://api-olymp-cinema.herokuapp.com/api/auth/register", {
        firstname,
        lastname,
        username,
        age,
        email,
        password,
        mobile,
      })
      .then((newUser) => {
        console.log("newUser: ", newUser);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: newUser,
        });

        // localStorage.setItem("token", newUser.data.token);
        // localStorage.setItem("isAdmin", newUser.data.role);
      })
      .catch((error) => {
        // console.log("eroare", error.request.response);
        console.log("eroare", error.request.response.split("%")[1]);
        // if (response) {
        //   console.log('eroare',response);
        dispatch({
          type: REGISTER_FAILURE,
          payload: error.request.response.split("%")[1],
        });
      });
  };

export default requestRegister;
