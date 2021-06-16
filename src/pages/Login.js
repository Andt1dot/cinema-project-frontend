import React from "react";
import LoginForm from "../components/LoginForm";
import { requestLogin } from "../actions/Auth";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const handleOnSubmitLogin = (email, password) => {
    dispatch(requestLogin(email, password));
  };

  return (
    <>
      <LoginForm onSubmit={handleOnSubmitLogin}></LoginForm>
    </>
  );
};

export default Login;
