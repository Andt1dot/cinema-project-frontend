import "./index.css";

const MovieCard = () => {
  return (
    <div className="card movie_card">
      <img
        src="https://www.goodillustration.com/blog/wp-content/uploads/2019/05/640-3.jpg"
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
        <h5 className="card-title">POKEMON Detective Pikachu</h5>
        <span className="movie_info">2019</span>
        <span className="movie_info float-right">
          <i className="fas fa-star"></i> 9 / 10
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
