import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { deleteMovie } from "../../actions/Movie";
import axios from "axios";
import "./style.css";

const SingleMovie = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { movie_id } = params;
  const [movie, setMovie] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/movies/${movie_id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((movie) => {
        setMovie(movie.data);
      });
  }, [movie_id]);

  const handleClickDeleteBtn = () => {
    console.log("movieId", movie._id);
    dispatch(deleteMovie(movie._id)).then(() => {
      history.push("/admin/movies");
    });
  };

  console.log("single-movie: ", movie.release_date);
  return (
    <>
      <div className="container">
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
                  <button className="crd-button">
                    <i className="fas fa-play "></i> SEE TRAILER
                  </button>
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
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Delete Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: "black" }}>
          Are you sure you want to delete this movie ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClickDeleteBtn}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleMovie;
