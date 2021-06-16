import "./index.css";

const MovieCard = ({premiere}) => {

  console.log("Component",premiere);

  return (
    <div className="card movie_card">
      <img
        src={premiere.movie.image_url}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <i
          className="fas fa-play play_button"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Play Trailer"
        ></i>
        <h5 className="card-title">{premiere.movie.title}</h5>
        <span className="movie_info">2019</span>
        <span className="movie_info float-right">
          <i className="fas fa-star"></i> {premiere.movie.rating}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
