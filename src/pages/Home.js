import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard/index";
import MovieCarousel from "../components/MovieCarousel";
import { fetchPremiereMovies } from "../actions/Premiere";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1125 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1125, min: 990 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 990, min: 770 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 770, min: 50 },
    items: 1,
  },
};

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPremiereMovies());
  }, [dispatch]);

  const { premieres, error } = useSelector((state) => ({
    premieres: state.Premiere.premieres,
    error: state.Premiere.error,
  }));

  return (
    <div>
      <MovieCarousel></MovieCarousel>
      <div className="container" style={{ marginTop: 30, marginBottom: 100 }}>
        <div>
          <h4 className="text-center">Filme în Derulare</h4>
          {premieres.length > 0 ? (
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              //showDots={true}
              ssr={true}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              //dotListClass="custom-dot-list-style"
              //itemClass="carousel-item-padding-40-px"
            >
              {premieres.map((premiere, index) => {
                return (
                  <Link
                    key={index}
                    className="col-md-auto text-decoration-none"
                    to={`/about-premiere/${premiere._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <MovieCard premiere={premiere} />
                  </Link>
                );
              })}
            </Carousel>
          ) : (
            <div>{error}</div>
          )}
        </div>
      </div>
    </div>
  );
}
