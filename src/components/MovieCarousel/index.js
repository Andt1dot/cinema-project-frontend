import { Carousel } from "react-bootstrap";

const MovieCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i1.sndcdn.com/artworks-000465495822-1tpgzr-t500x500.jpg"
          alt="First slide"
          fluid 
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://4.bp.blogspot.com/-M5KhigHDHAA/V05x-NRMCjI/AAAAAAAAHHM/60yCQDQZ68QFpShJBxEFZjEXdH571oK4gCLcB/s640/batman-vs-superman-1-500x500_c.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSikAGBx6uw-88DYCbQ0e-kOfPzBknnNOov6Q&usqp=CAU"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MovieCarousel;
