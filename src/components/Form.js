import React from "react";
import styled from "styled-components";

const Container = styled.form.attrs({
  onSubmit: (props) => props.onSubmit,
})`
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

const Form = ({ children }, props) => {
  return <Container onSubmit={props.onSubmit}>{children}</Container>;
};

export default Form;
