import React from "react";
import PropTypes from "prop-types";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import styled from "styled-components";
import image from "../assets/images/Login.jpg";

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

export default function Register() {
  return (
    <Container>
      <Form>
        <Title>Register</Title>
        <Input type="text" placeholder="Firstname"></Input>
        <Input type="text" placeholder="Lastname"></Input>
        <Select
          type="Age Category"
          val1="Adult"
          val2="Adolescent"
          val3="Copil"
        />
        <Input type="email" placeholder="Email"></Input>
        <Input type="text" placeholder="Username"></Input>
        <Input type="password" placeholder="Password"></Input>
        <Input type="mobile" placeholder="Phone"></Input>
        <Button text="Sign-Up" signUp />
      </Form>
    </Container>
  );
}

Register.propTypes = {};
