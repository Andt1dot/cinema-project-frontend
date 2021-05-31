import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #17181c;
  border-radius: 5px;
  box-shadow: 0 3px 10px 2px #737478;
`;

const Button = styled.button`
  width: 55%;
  padding: 8px 16px;
  background: ${(props) => (props.signIn ? "#17181c" : "red")};
  border: 2px solid gold;
  border-radius: 5px;
  font-family: "Bitter", sans-serif;
  font-size: 1.2em;
  color: gold;
  transition: 0.25s;
  margin: 0.5em;

  :hover,
  :focus {
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.25em);
  }
`;

const Input = styled.input`
  width: 75%;
  display: block;
  outline: none;
  padding: 8px 16px;
  background: #17181c;
  border: 2px solid gray;
  border-radius: 5px;
  font-family: "Bitter", serif;
  font-size: 1.2em;
  color: #b3afaf;
  margin: 0.5em;
  :focus {
    background-color: #2a2b2e;
  }
  ::placeholder {
    color: #6e6b6b;
  }
`;

const Title = styled.h1`
  font-family: "Bitter", serif;
  color: gold;
`;

const Form = () => {
  return (
    <Container>
      <Title>Login</Title>
      <Input type="text" placeholder="Email"></Input>
      <Input type="password" placeholder="Password"></Input>
      <a href="#">Forgot Password</a>
      <Button signIn>Sign-In</Button>
      <Button signUp>Sign-Up</Button>
    </Container>
  );
};

export default Form;
Form.prototype = {};
