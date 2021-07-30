import "./index.css";

const MovieCard = ({ premiere, movie }) => {
  return (
    <>
      {premiere?.movie || movie ? (
        <div className="card movie_card">
          <img
            src={premiere?.movie.image_url || movie?.image_url}
            className="card-img-top movie_card_img"
            alt="movie-card"
          />
          <div className="card-body">
            <h5 className="card-title-movie">
              {premiere?.movie.title || movie?.title}
            </h5>
            <span className="movie_info">
              {premiere?.movie.release_date.split("T")[0].split("-")[0] ||
                movie?.release_date.split("T")[0].split("-")[0]}
            </span>
            <span className="movie_info float-right">
              <i className="fas fa-star"></i>{" "}
              {premiere?.movie.rating || movie?.rating}
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MovieCard;
