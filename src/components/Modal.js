import React from "react";
import styled from "styled-components";

const Container1 = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  display: flex;
  justify-content: center;
  align-self: center;
`;

const Container2 = styled.div`
  background-color: rgb(2, 0, 0, 0.7);
  display: grid;
  width: 500px;
  height: 120px;
  border-radius: 25px;
  align-self: center;
  justify-content: center;
  box-shadow: 5px 5px 15px white;
  color: white;
`;

const Modal = () => {
  return (
    <Container1>
      <Container2></Container2>
    </Container1>
  );
};

export default Modal;