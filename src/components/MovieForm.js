import React from "react";
import styled from "styled-components";

const Row = styled.div`
  margin: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex: 2;
`;

const Title = styled.h3`
  color: gold;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  margin: 5px;
  padding: 4px;
  border: 2px solid gold;
  border-radius: 5px;
  font-size: 18px;
  font-family: serif;
`;

const Text = styled.textarea`
  width: 65%;
  height: 75px;
  border: 2px solid gold;
  border-radius: 5px;
  font-size: 18px;
  font-family: serif;
`;

const Button = styled.button`
  width: 300px;
  margin: 5px;
  padding: 8px 16px;
  background: rgb(17, 23, 33);
  border: 1px solid gold;
  border-radius: 8px;
  font-family: "Bitter", sans-serif;
  font-size: 1.2em;
  color: gold;
  transition: 0.25s;

  :hover,
  :focus {
    box-shadow: 0 0.5em 0.5em -0.4em;
    transform: translateY(-0.25em);
  }
`;

const MovieForm = () => {
  return (
    <form>
      <Row>
        <Title>Add New Movie</Title>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Input type="text" name="title" placeholder="Title"></Input>
        <Input type="text" placeholder="Original Title"></Input>
        <Input type="date" placeholder="Release Date"></Input>
      </Row>
      <Row>
        <Input type="text" placeholder="Director"></Input>
        <Input type="number" placeholder="Rating"></Input>
      </Row>
      <Row>
        <Input type="text" placeholder="Duration"></Input>
        <Input type="text" placeholder="Age Restriction"></Input>
      </Row>
      <Row>
        <Input type="text" placeholder="Genre"></Input>
        <Input type="text" placeholder="Actors"></Input>
      </Row>
      <Row>
        <Text placeholder="Description..."></Text>
      </Row>
      <Row>
        <Input type="file"></Input>
        <Input type="file"></Input>
      </Row>
      <Row>
        <Button>Add Movie</Button>
      </Row>
    </form>
  );
};

export default MovieForm;
