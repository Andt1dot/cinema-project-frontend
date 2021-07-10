import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import "./index.css";

const CardCustom = ({ movie, premiere, handleShow }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {premiere?.movie || movie ? (
        <div className="main_card">
          <div className="card_left">
            <div className="card_datails">
              <h4>{premiere?.movie.title || movie.title}</h4>

              {movie ? (
                <p>Original title: {movie.original_title}</p>
              ) : (
                <p>
                  Start Date:
                  {premiere.premiere_start_date.split("T", 1).toString()}
                  <span style={{ padding: "10px" }}> </span>
                  End Date:
                  {premiere.premiere_end_date.split("T", 1).toString()}
                </p>
              )}

              <div className="card_cat">
                <p className="PG">
                  {premiere?.movie.age_restrict || movie.age_restrict}
                </p>
                {movie ? (
                  <p className="year">2021</p>
                ) : (
                  <p className="year">{premiere.price} MDL</p>
                )}

                <p className="genre">{premiere?.movie.genre || movie.genre}</p>
                <p className="time">
                  {premiere?.movie.duration || movie.duration}
                </p>
              </div>
              {movie ? (
                <p className="disc">{movie.description}</p>
              ) : (
                <p className="disc">
                  Performance hours:{" "}
                  {premiere.interval_hours.map((hour, idx) => (
                    <span style={{ padding: "10px" }} key={idx}>
                      {hour}
                    </span>
                  ))}
                </p>
              )}

              {movie ? (
                <p className="crew">
                  Director: {movie.director}
                  <br></br>
                  Stars: {movie.actors}
                </p>
              ) : (
                <p className="crew">
                  Cinemas:{" "}
                  {premiere?.cinema.map((cinema, idx) => (
                    <span style={{ padding: "10px" }} key={idx}>
                      {cinema.name}
                    </span>
                  ))}
                  <br></br>
                  Halls:{" "}
                  {premiere?.hall.map((hall, idx) => (
                    <span style={{ padding: "10px" }} key={idx}>
                      {hall.name}
                    </span>
                  ))}
                </p>
              )}

              <div className="social-btn row">
                <div className="col-md-4">
                  <button className="crd-button" onClick={() => setShow(true)}>
                    <i className="fas fa-play "></i> SEE TRAILER
                  </button>
                  <Modal
                    size="lg"
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        Trailer
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <iframe
                        title="movie-trailer"
                        src={premiere?.movie.video_url || movie.video_url}
                        width="765"
                        height="600"
                        allow="autoplay;  encrypted-media; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                      ></iframe>
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="col-md-3">
                  <button className="crd-button">
                    <i className="fas fa-star "></i>
                    <span> {premiere?.movie.rating || movie.rating}</span>
                  </button>
                </div>
                <div className="col-md-2">
                  {movie ? (
                    <Link to={`/admin/movies/movie-edit/${movie._id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                  ) : (
                    <Link to={`/admin/premieres/premiere-edit/${premiere._id}`}>
                      <button className="btn btn-primary">Edit</button>
                    </Link>
                  )}
                </div>
                <div className="col-md-3">
                  <button className="btn btn-danger" onClick={handleShow}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card_right">
            <div className="img_container">
              <img src={premiere?.movie.image_url || movie.image_url} alt="" />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CardCustom;
