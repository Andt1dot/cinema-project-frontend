import React from "react";
import styled from "styled-components";

const Container = styled.form`
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

const Form = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Form;
