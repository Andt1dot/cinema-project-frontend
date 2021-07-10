import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { deleteMovie } from "../../actions/Movie";
import CardCustom from "../../components/CardCustom";
import axios from "axios";

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

  //console.log("single-movie: ", movie.release_date);
  return (
    <>
      <div className="container">
        <CardCustom movie={movie} handleShow={handleShow} />
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
