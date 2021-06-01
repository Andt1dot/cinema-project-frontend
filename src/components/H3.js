import React from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
  color: white;
`;

const H3 = (props) => {
  return <StyledH3>{props.text}</StyledH3>;
};

export default H3;
