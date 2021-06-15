import "./index.css";

const MovieCard = () => {
  return (
    <div class="card movie_card">
      <img
        src="https://www.goodillustration.com/blog/wp-content/uploads/2019/05/640-3.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <i
          class="fas fa-play play_button"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Play Trailer"
        ></i>
        <h5 class="card-title">POKEMON Detective Pikachu</h5>
        <span class="movie_info">2019</span>
        <span class="movie_info float-right">
          <i class="fas fa-star"></i> 9 / 10
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
