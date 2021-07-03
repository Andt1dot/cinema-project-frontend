import { Carousel } from "react-bootstrap";
import "./index.css";

const MovieCarousel = () => {
  return (
    <Carousel fade interval={5000}>
      <Carousel.Item>
        <img
          id="slide1"
          className="d-block w-100 banner"
          src="https://aboveandbeyondthescreen.files.wordpress.com/2021/05/mortal-kombat-poster.jpeg"
          alt="First slide"
        />
        {/*
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slide2"
          className="d-block w-100 banner"
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/06/black-widow-character-guide.jpg"
          alt="Second slide"
        />
        {/*
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item>
        <img
          id="slide3"
          className="d-block w-100 banner"
          src="https://miro.medium.com/max/1838/0*AD2DP7uQMga95-Vs"
          alt="Third slide"
        />
        {/*
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
         </Carousel.Caption>*/}
      </Carousel.Item>
    </Carousel>
  );
};

export default MovieCarousel;
