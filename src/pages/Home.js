import React from "react";
import MovieCard from "../components/MovieCard/index";
import MovieCarousel from "../components/MovieCarousel";

export default function Home() {
  return (
    <div className="container">
      <MovieCarousel></MovieCarousel>
      <div className="row justify-content-md-center">
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </div>
    </div>
  );
}
