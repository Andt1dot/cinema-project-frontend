import React from "react";
import PropTypes from "prop-types";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components";
import image from "../pages/Login.jpg";

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

const H3 = styled.h3`
  color: white;
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
        <H3>Forgot Password ?</H3>
        <Button signIn>Sign-In</Button>
        <Hr />
        <Button signUp>Sign-Up</Button>
      </Form>
    </Container>
  );
};

export default Login;
Login.propTypes = {};
