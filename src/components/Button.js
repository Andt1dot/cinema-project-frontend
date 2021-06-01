import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 55%;
  padding: 8px 16px;
  background: ${(props) =>
    props.signUp ? "red" : props.signIn ? "green" : "grey"};
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

export default function Button(props) {
  return (
    <StyledButton type={props.type} signUp={props.signUp} signIn={props.signIn}>
      {props.text}
    </StyledButton>
  );
}
