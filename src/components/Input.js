import React from "react";
import styled from "styled-components";

const InputField = styled.input`
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
