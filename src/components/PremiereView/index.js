<<<<<<< HEAD
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
=======
import React from "react";
import "./index.css";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";

const PremiereDescription = ({ premiere }) => {
  console.log("Vine datele", premiere);

  const [isOpen, setOpen] = React.useState(false);

  return Object.keys(premiere).length > 0 ? (
>>>>>>> 7e8cbdca0f411660dcaf8a8f3d5d73128302c79f
    <div className="movieDetails">
      <div
        className="movieDetails__backdrop"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          objectFit: "contain",
<<<<<<< HEAD
          backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0.8071603641456583) 100%), url({'https://image.tmdb.org/t/p/w342/M7SUK85sKjaStg4TKhlAVyGlz3.jpg'}{'https://image.tmdb.org/t/p/w342/M7SUK85sKjaStg4TKhlAVyGlz3.jpg'})`,
=======
          backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0.8071603641456583) 100%), url(${premiere.movie.image_url})`,
>>>>>>> 7e8cbdca0f411660dcaf8a8f3d5d73128302c79f
        }}
      >
        <div className="movieDetails__main">
          <div className="movieDetails__info">
            <div>
              <img
                className="movieDetails__mainPoster"
<<<<<<< HEAD
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
=======
                src={premiere.movie.image_url}
                alt={"Wrath of Man (2021)"}
              />
            </div>
            <div className="movieDetails__mainInfo">
              <h1 className="movieDetails__title">{premiere.movie.title}</h1>

>>>>>>> 7e8cbdca0f411660dcaf8a8f3d5d73128302c79f
              <p
                className="movieDetails__director"
                key={1 * Math.floor(Math.random() * 100)}
              >
<<<<<<< HEAD
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
=======
                Directed by Guy Ritchie
              </p>

              <p className="movieDetails__runtime">1h 59m</p>

              <div className="movieDetails__genres">
                <p className="movieDetails__genre">Crime | Action</p>
              </div>
              <div className="movieDetails__buttonDiv">
                  <div className="rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                </div>
>>>>>>> 7e8cbdca0f411660dcaf8a8f3d5d73128302c79f
                <button
                  className="trailer__button movieDetails__button"
                  onClick={() => setOpen(true)}
                >
                  Play Trailer
                </button>
              </div>
              <div>
<<<<<<< HEAD
                <p className="movieDetails__overview">Movie overview</p>
=======
                <p className="movieDetails__overview">
                  {premiere.movie.description}
                </p>
>>>>>>> 7e8cbdca0f411660dcaf8a8f3d5d73128302c79f
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
<<<<<<< HEAD
          videoId={1}
=======
          videoId={"EFYEni2gsK0"}
>>>>>>> 7e8cbdca0f411660dcaf8a8f3d5d73128302c79f
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
<<<<<<< HEAD
  );
}

export default MovieDetails;
=======
  ) : null;
};

export default PremiereDescription;
>>>>>>> 7e8cbdca0f411660dcaf8a8f3d5d73128302c79f
