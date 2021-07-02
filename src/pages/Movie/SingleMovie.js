import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./index.css";

const SingleMovie = () => {
  const params = useParams();
  const { movie_id } = params;
  const [movie, setMovie] = useState({});

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
  console.log("single-movie: ", movie);
  return (
    <>
      <div className="container">
        <div className="main_card">
          <div className="card_left">
            <div className="card_datails">
              <h1>Mission: Impossible – Fallout</h1>
              <div className="card_cat">
                <p className="PG">PG - 13</p>
                <p className="year">2018</p>
                <p className="genre">Action | Adventure </p>
                <p className="time">2h 28m</p>
              </div>
              <p className="disc">
                Ethan Hunt and his IMF team, along with some familiar allies,
                race against time after a mission gone wrong.
              </p>
              <a href="https://www.imdb.com/title/tt4912910/">Read More</a>
              <div className="social-btn">
                <button>
                  <i className="fas fa-play"></i> SEE TRAILER
                </button>
                <button>
                  <i className="fas fa-download"></i> DOWNLOAD
                </button>
                <button>
                  <i className="fas fa-thumbs-up"></i> 97%
                </button>
                <button>
                  <i className="fas fa-star"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card_right">
            <div className="img_container">
              <img src={movie.image_url} alt="" />
            </div>
            <div className="play_btn">
              <a href="https://www.imdb.com/title/tt4912910/"></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
