import React from "react";
import PropTypes from "prop-types";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";
import image from "../pages/bg.jpg";

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

const Login = () => {
  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input type="text" placeholder="Email"></Input>
        <Input type="password" placeholder="Password"></Input>
        <a href="http://localhost:3000/">Forgot Password</a>
        <Button signIn>Sign-In</Button>
        <Button signUp>Sign-Up</Button>
      </Form>
    </Container>
  );
};

export default Login;
Login.propTypes = {};
