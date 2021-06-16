import { Carousel } from "react-bootstrap";

const MovieCarousel = () => {
  return (
    <div className="container-fluid mb-5">
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="container-fluid rounded"
            src="https://hotindionline.com/wp-content/uploads/2021/04/Karnan-box-office-collection-Dhanush8217s-film-is-performing-well-900x400.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MovieCarousel;
