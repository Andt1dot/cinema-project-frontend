import React, { useState } from "react";
// import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";
import image from "../assets/images/Login.jpg";
import { Link, Route, Switch } from "react-router-dom";
import H3 from "../components/H3";
import ResetModal from "../modals/ResetModal";
import { requestLogin } from "../actions/Auth";
// import axios from "axios";
const Container = styled.div`
  display: flex;
  background: url(${image});
  height: 100vh;
  background-size: cover;
  background-position: center;
  magrin: 0;
  padding: 0;
`;

const Title = styled.h1`
  font-family: "Bitter", serif;
  color: gold;
`;

const Hr = styled.hr`
  color: white;
  width: 50%;
`;

//Proble m--------import
const Form = styled.form`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: RGB(255, 255, 255, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 10px 1px #ffffff;
`;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleOnSubmitLogin = (event) => {
    event.preventDefault();
    requestLogin(email,password);
    // axios
    //   .post("http://localhost:4000/api/auth/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((user) => {
    //     console.log(user);
    //   })
    //   .catch(Error);
    // {
    //   console.log(Error.message);
    // }
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmitLogin}>
        <Title>Login</Title>
        <Input
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="Email"
        ></Input>
        <Input
          onChange={handlePasswordChange}
          value={password}
          type="password"
          placeholder="Password"
        ></Input>

        <Link to="/login/reset-password">
          <H3 text="Ați uitat parola?" />
        </Link>

        <Button
          text="Sign-In"
          signIn
          type="submit"
          onClick={handleOnSubmitLogin}
        />
        <Hr />
        <Link to="/register">
          <Button text="Sign-Up" signUp />
        </Link>
      </Form>
      <Switch>
        <Route path="/login/reset-password" component={ResetModal} />
      </Switch>
    </Container>
  );
};

export default Login;
