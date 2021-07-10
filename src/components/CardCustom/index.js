import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import "./index.css";

const CardCustom = ({ movie, handleShow }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h4>{movie.title}</h4>
            <p>Original title: {movie.original_title}</p>
            <div className="card_cat">
              <p className="PG">{movie.age_restrict}</p>
              <p className="year">2021</p>
              <p className="genre">{movie.genre}</p>
              <p className="time">{movie.duration}</p>
            </div>
            <p className="disc">{movie.description}</p>
            <p className="crew">
              Director: {movie.director}
              <br></br>
              Stars: {movie.actors}
            </p>
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
                      src={movie.video_url}
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
                  <span> {movie.rating}</span>
                </button>
              </div>
              <div className="col-md-2">
                <Link to={`/admin/movies/movie-edit/${movie._id}`}>
                  <button className="btn btn-primary">Edit</button>
                </Link>
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
            <img src={movie.image_url} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCustom;
