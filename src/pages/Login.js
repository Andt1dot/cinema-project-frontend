import React from "react";
import PropTypes from "prop-types";
import Form from "../components/Form";
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

const Login = () => {
  return (
    <Container>
      <Form></Form>
    </Container>
  );
};

export default Login;
Login.propTypes = {};
