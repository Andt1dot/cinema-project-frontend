import React, { useState } from "react";
import "./index.css";

const initialData = {
  title: "",
  original_title: "",
  genre: "",
  director: "",
  release_date: "",
  rating: 0,
  description: "",
  actors: "",
  age_restrict: "Age Restrict",
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
    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Add Movie</h4>
                        <form onSubmit={onSubmitForm}>
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="title"
                                  className="form-style"
                                  autoComplete="off"
                                  placeholder="Title"
                                  value={data.title}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="original_title"
                                  className="form-style"
                                  autoComplete="off"
                                  placeholder="Original Title"
                                  value={data.original_title}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col">
                              <div className="form-group">
                                <input
                                  type="date"
                                  name="release_date"
                                  className="form-style"
                                  autoComplete="off"
                                  placeholder="Release Date"
                                  value={data.release_date}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="director"
                                  className="form-style"
                                  autoComplete="off"
                                  placeholder="Director"
                                  value={data.director}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col">
                              <div className="form-group">
                                <input
                                  type="number"
                                  name="rating"
                                  className="form-style"
                                  autoComplete="off"
                                  placeholder="Rating"
                                  value={data.rating}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="duration"
                                  className="form-style"
                                  autoComplete="off"
                                  placeholder="Duration"
                                  value={data.duration}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col">
                              <div className="form-group">
                                <select
                                  name="age_restrict"
                                  className="form-style"
                                  value={data.age_restrict}
                                  onChange={handleInputChange}
                                >
                                  <option value="Age Restrict">
                                    Age Restrict:
                                  </option>
                                  <option value="AG">AG</option>
                                  <option value="12+">12+</option>
                                  <option value="15+">15+</option>
                                  <option value="18+">18+</option>
                                </select>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="genre"
                                  className="form-style"
                                  autoComplete="off"
                                  placeholder="Genre"
                                  value={data.genre}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="actors"
                                  className="form-style"
                                  autoComplete="off"
                                  placeholder="Actors"
                                  value={data.actors}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <textarea
                                  name="description"
                                  className="form-style"
                                  placeholder="Description..."
                                  value={data.description}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col">
                              <div className="form-group">
                                <div
                                  id="image_upload"
                                  onDoubleClick={showWidget}
                                  className="form-style"
                                >
                                  Upload Image
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <div
                                  id="video_upload"
                                  onDoubleClick={showWidget}
                                  className="form-style"
                                >
                                  Upload Video
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col">
                              <div>
                                {data.image_url && (
                                  <img
                                    src={data.image_url}
                                    alt="movie_image"
                                    style={{
                                      width: 200,
                                      display: "block",
                                      margin: "0 auto",
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                {data.video_url && (
                                  <iframe
                                    title="movie_video"
                                    src={data.video_url}
                                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                    frameBorder="0"
                                    style={{
                                      height: 250,
                                      display: "block",
                                      margin: "0 auto",
                                    }}
                                  ></iframe>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group">
                              {" "}
                              <button className="btn mt-3">submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieForm;
