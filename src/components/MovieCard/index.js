import { Card } from "react-bootstrap";
import "./index.css";

const MovieCard = ({ premiere, movie, responsive }) => {
  return (
    <>
      {premiere?.movie || movie ? (
        <Card
          style={{
            margin: "30px",
          }}
        >
          <Card.Img
            variant="top"
            src={premiere?.movie.image_url || movie?.image_url}
            className="card-img-top movie_card_img"
          />
          <Card.Body>
            <Card.Title
              style={{
                width: "content-width",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {premiere?.movie.title || movie?.title}
            </Card.Title>
            <Card.Footer>
              <span className="movie_info">
                {premiere?.movie.release_date.split("T")[0].split("-")[0] ||
                  movie?.release_date.split("T")[0].split("-")[0]}
              </span>
              <span className="movie_info float-right">
                <i className="fas fa-star"></i>{" "}
                {premiere?.movie.rating || movie?.rating}
              </span>
            </Card.Footer>
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
};

export default MovieCard;
