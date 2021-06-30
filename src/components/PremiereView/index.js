import React from "react";
import "./index.css";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";
import ReservationForm from "../ReservationForm";

const PremiereDescription = ({ premiere }) => {
  const [isOpen, setOpen] = React.useState(false);

  console.log("Premiere", premiere);

  return Object.keys(premiere).length > 0 ? (
    <div className="movieDetails">
      <div
        className="movieDetails__backdrop"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          objectFit: "contain",
          backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0.8071603641456583) 100%), url(${premiere.movie.image_url})`,
        }}
      >
        <div className="movieDetails__main">
          <div className="movieDetails__info">
            <div>
              <img
                className="movieDetails__mainPoster"
                src={premiere.movie.image_url}
                alt={"Wrath of Man (2021)"}
              />
            </div>
            <div className="movieDetails__mainInfo">
              <h1 className="movieDetails__title">{premiere.movie.title}</h1>

              <p
                className="movieDetails__director"
                key={1 * Math.floor(Math.random() * 100)}
              >
                Directed by Guy Ritchie
              </p>

              <p className="movieDetails__runtime">1h 59m</p>

              <div className="movieDetails__genres">
                <p className="movieDetails__genre">Crime | Action</p>
              </div>
              <div className="movieDetails__buttonDiv">
                <div className="rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <button
                  className="trailer__button movieDetails__button"
                  onClick={() => setOpen(true)}
                >
                  Play Trailer
                </button>
              </div>
              <div>
                <p className="movieDetails__overview">
                  {premiere.movie.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ReservationForm premiere={premiere} />
      </div>

      <div className="movieDetails__trailer">
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={"EFYEni2gsK0"}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  ) : null;
};

export default PremiereDescription;
