import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard/index";
import MovieCarousel from "../components/MovieCarousel";
import { fetchPremiereMovies } from "../actions/Premiere";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
    <div className="container">
      <MovieCarousel></MovieCarousel>
      <div className="row justify-content-md-center">
        {premieres.length > 0 ? (
          premieres[0].map((premiere, index) => {
            return (
              <Link
                key={index}
                className="col-md-auto"
                to={`/about-premiere/${premiere._id}`}
              >
                <MovieCard premiere={premiere} />
              </Link>
            );
          })
        ) : (
          <div>{error}</div>
        )}
      </div>
    </div>
  );
}
