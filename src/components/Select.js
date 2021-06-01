import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 88%;
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

  option {
    color: black;
    background: rgb(255, 255, 255);
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default function Select(props) {
  return (
    <StyledSelect>
      <option value="" hidden>
        {props.type}
      </option>
      <option value="1">{props.val1}</option>
      <option value="2">{props.val2}</option>
      <option value="3">{props.val3}</option>
    </StyledSelect>
  );
}
