import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard/index";
import MovieCarousel from "../components/MovieCarousel";
import { fetchPremiereMovies } from "../actions/Home";
import { useDispatch, useSelector } from "react-redux";
import Premiere from "../reducers/Premiere";
import { Link } from "react-router-dom";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPremiereMovies());
  }, []);

  const { premieres, error } = useSelector((state) => ({
    premieres: state.Premiere.premieres,
    error: state.Premiere.error,
  }));

  return (
    <div className="container">
      <MovieCarousel></MovieCarousel>
      <div className="row justify-content-md-center">
        {premieres.length > 0
          ? premieres[0].map((premiere, index) => {
              return (
                <Link
                  className="col-md-auto"
                  to={`/about-premiere/${premiere._id}`}
                >
                  <MovieCard key={index} premiere={premiere} />
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}
