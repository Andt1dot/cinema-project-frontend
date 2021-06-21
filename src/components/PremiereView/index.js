import React, { useState, useEffect } from "react";
import "./index.css";
import ModalVideo from "react-modal-video";

function MovieDetails({ match }) {
  const [movie, setMovie] = useState([]);
  const [credits, setCredits] = useState([]);
  const [similar, setSimilar] = useState([]);

  const [isOpen, setOpen] = useState(false);
  const [trailer, setTrailer] = useState([]);

  return (
    <div className="movieDetails">
      <div
        className="movieDetails__backdrop"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          objectFit: "contain",
          backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0.8071603641456583) 100%), url({'https://image.tmdb.org/t/p/w342/M7SUK85sKjaStg4TKhlAVyGlz3.jpg'}{'https://image.tmdb.org/t/p/w342/M7SUK85sKjaStg4TKhlAVyGlz3.jpg'})`,
        }}
      >
        <div className="movieDetails__main">
          <div className="movieDetails__info">
            <div>
              <img
                className="movieDetails__mainPoster"
                src={
                  "https://image.tmdb.org/t/p/w342/M7SUK85sKjaStg4TKhlAVyGlz3.jpg"
                }
                alt={""}
              />
            </div>
            <div className="movieDetails__mainInfo">
              <h1 className="movieDetails__title">
                Acesta este un titlu
                <span>2020</span>
              </h1>
              <p
                className="movieDetails__director"
                key={1 * Math.floor(Math.random() * 100)}
              >
                Directed by{"Jon "}
                <span className="movieDetails__director__span">
                  {"Original name"}
                </span>{" "}
              </p>
              )){" "}
              {/*filter over the crew array to find the director and then render it*/}
              <p className="movieDetails__runtime">
                {Math.floor(1 / 60)}h {1 % 60}m{" "}
              </p>
              {/*conditional rendering doesn't render 0 min. Runtime is converted mins to hr min*/}
              <div className="movieDetails__genres">
                <p
                  key={1 * Math.floor(Math.random() * 100)}
                  className="movieDetails__genre"
                >
                  Acestea este moive details genre
                </p>
              </div>
              <div className="movieDetails__buttonDiv">
                <button
                  className="trailer__button movieDetails__button"
                  onClick={() => setOpen(true)}
                >
                  Play Trailer
                </button>
              </div>
              <div>
                <p className="movieDetails__overview">Movie overview</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="movieDetails__trailer">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={1}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
}

export default MovieDetails;
