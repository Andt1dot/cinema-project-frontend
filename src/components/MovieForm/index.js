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
  genre: "",
  director: "",
  release_date: "",
  rating: 0,
  description: "",
  actors: "",
  age_restrict: "",
  duration: "",
  image_url: "",
  video_url: "",
};

const MovieForm = ({ onSubmitHandler }) => {
  const [data, setData] = useState(initialData);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    //console.log("data: ", data);
    onSubmitHandler(data);
    setData(initialData);
  };

  const showWidget = (e) => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "olymp-cinema",
        uploadPreset: "olymp_cinema",
        folder: "movies",
        chunk_size: 6000000,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(
            "File uploaded successfully! Here is the info: ",
            result.info
          );
          if (e.target.id === "image_upload") {
            setData({ ...data, image_url: result.info.secure_url });
          } else if (e.target.id === "video_upload") {
            setData({ ...data, video_url: result.info.secure_url });
          }
        }
      }
    );

    widget.open();
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
          name="age_restrict"
          placeholder="Age Restriction"
          value={data.age_restrict}
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
        <div
          id="image_upload"
          onDoubleClick={showWidget}
          style={{ background: "green", margin: 3, fontWeight: "bold" }}
        >
          Upload Image
        </div>
        <div style={{ width: 300 }}>
          {data.image_url && (
            <img
              src={data.image_url}
              alt="movie_image"
              style={{ width: 100 }}
            />
          )}
        </div>
      </Row>
      <Row>
        <div
          id="video_upload"
          onDoubleClick={showWidget}
          style={{ background: "green", margin: 3, fontWeight: "bold" }}
        >
          Upload Video
        </div>
        <iframe
          title="movie_video"
          src={data.video_url}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          frameBorder="0"
        ></iframe>
      </Row>
      <Row>
        <Button type="submit">Add Movie</Button>
      </Row>
      {/**<select value={this.state.fruit} onChange={this.handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
  </select> */}
    </form>
  );
};

export default MovieForm;
