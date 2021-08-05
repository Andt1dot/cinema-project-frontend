import React, { createContext, useContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const { movies, news, reservations } = useSelector((state) => ({
    movies: state.Movie.movies,
    news: state.News.news,
    reservations: state.Reservation.reservations,
  }));

  let location = useLocation();
  let pathname = location.pathname;

  const filteredData = useMemo(() => {
    switch (pathname) {
      case "/admin/movies":
        if (!search) {
          return movies;
        }
        return movies.filter(({ title }) => title.includes(search));

      case "/admin/news":
        if (!search) {
          return news;
        }
        return news.filter(({ title }) => title.includes(search));

      case "/admin/reservations":
        if (!search) {
          return reservations;
        }
        return reservations.filter(({ _id }) => _id.includes(search));

      default:
        return [];
    }
  }, [search, pathname, movies, news, reservations]);

  const value = {
    search,
    setSearch,
    filteredData,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
