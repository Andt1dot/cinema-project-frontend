import React, { useState } from "react";
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

const initialData = {
  title: "",
  original_title: "",
  genre: [""],
  director: "",
  release_date: "",
  rating: "",
  description: "",
  actors: [""],
  age_category_restrict: "",
  duration: "",
  image_url: "",
  video_url: "",
};

const MovieForm = ({ onSubmitHandler }) => {
  const [data, setData] = useState(initialData);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmitHandler(data);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Row>
        <Title>Add New Movie</Title>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={data.title}
          onChange={handleInputChange}
        ></Input>
        <Input
          type="text"
          name="original_title"
          placeholder="Original Title"
          value={data.original_title}
          onChange={handleInputChange}
        ></Input>
        <Input
          type="date"
          name="release_date"
          placeholder="Release Date"
          value={data.release_date}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Input
          type="text"
          name="director"
          placeholder="Director"
          value={data.director}
          onChange={handleInputChange}
        ></Input>
        <Input
          type="number"
          name="rating"
          placeholder="Rating"
          value={data.rating}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Input
          type="text"
          name="duration"
          placeholder="Duration"
          value={data.duration}
          onChange={handleInputChange}
        ></Input>
        <Input
          type="text"
          name="age_category_restrict"
          placeholder="Age Restriction"
          value={data.age_category_restrict}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Input
          type="text"
          name="genre"
          placeholder="Genre"
          value={data.genre}
          onChange={handleInputChange}
        ></Input>
        <Input
          type="text"
          name="actors"
          placeholder="Actors"
          value={data.actors}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Text
          name="description"
          placeholder="Description..."
          value={data.description}
          onChange={handleInputChange}
        ></Text>
      </Row>
      <Row>
        <Input
          type="file"
          name="image_url"
          value={data.image_url}
          onChange={handleInputChange}
        ></Input>
        <Input
          type="file"
          name="video_url"
          value={data.video_url}
          onChange={handleInputChange}
        ></Input>
      </Row>
      <Row>
        <Button>Add Movie</Button>
      </Row>
    </form>
  );
};

export default MovieForm;
