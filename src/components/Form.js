import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
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

const Button = styled.button`
  width: 55%;
  padding: 8px 16px;
  background: ${(props) => (props.signIn ?"rgb(0, 100, 0,0.7)" : "rgb(255, 0, 0,0.7)")};
  border: 1px solid gold;
  border-radius: 8px;
  font-family: "Bitter", sans-serif;
  font-size: 1.2em;
  color: gold;
  transition: 0.25s;
  margin: 0.5em;
 cursor:pointer;
  :hover,
  :focus {
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.25em);
  }
`;

const H3 = styled.h3`
  color: white;
`;

const Input = styled.input`
  width: 75%;
  outline: none;
  padding: 5px 16px;
  border-radius: 8px;
  font-family: "Bitter", serif;
  font-size: 1.2em;
  background: rgb(255, 255, 255);
  margin: 0.5em;
  :focus {
    box-shadow: 0 1px 10px 1px #ffffff;
  }
`;


const Title = styled.h1`
  font-family: "Bitter", serif;
  color: gold;
`;
const Hr = styled.hr`
  color: white;
  width: 50%;
`;

const Form = () => {
  return (
    <Container>
      <Title>Login</Title>
      <Input type="text" placeholder="Email"></Input>
      <Input type="password" placeholder="Password"></Input>
      <H3>Forgot Password ?</H3>
      <Button signIn>Sign-In</Button>
      <Hr />
      <Button signUp>Sign-Up</Button>
    </Container>
  );
};

export default Form;
Form.prototype = {};
