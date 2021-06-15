import React from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard/index";
import MovieCarousel from "../components/MovieCarousel";

export default function Home() {
  return (
    <div className="container">
      <div className="row">  
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      <MovieCard></MovieCard>
      </div>
    </div>
  );
}
