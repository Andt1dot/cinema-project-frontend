import React from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";
import image from "../assets/images/Login.jpg";
import { Link, Route, Switch } from "react-router-dom";
import H3 from "../components/H3";
import ResetModal from "../modals/ResetModal";

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

const Login = () => {
  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input type="text" placeholder="Email"></Input>
        <Input type="password" placeholder="Password"></Input>

        <Link to="/login/reset-password">
          <H3 text="Ați uitat parola?" />
        </Link>

        <Link to="/">
          <Button text="Sign-In" signIn />
        </Link>
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
