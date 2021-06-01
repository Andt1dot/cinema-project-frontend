import React from "react";
import styled from "styled-components";

const InputField = styled.input`
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

export default function Input(props) {
  return (
    <InputField
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
