import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../../actions/Movie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FilterCustom from "../../components/FilterCustom";
import { useSearch } from "../../contexts/SearchContext";
import { Button, Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const MoviesList = () => {
  const [filterOptions, setFilterOptions] = useState({
    genre: "",
    release_date: "",
    age_restrict: "",
  });
  const [filteredMovies, setFilteredMovies] = useState([]);
  const dispatch = useDispatch();
  const { filteredData } = useSearch();
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const { movies, loading, error } = useSelector((state) => ({
    movies: state.Movie.movies,
    error: state.Movie.error,
    loading: state.Movie.loading,
  }));

  //console.log("get movies: ", movies);

  const handleClickFilter = () => {
    console.log("i am here");
    const filteredMovies = movies.filter(
      (movie) =>
        // movie.genre.includes(filterOptions?.genre) ||
        // movie.release_date === filterOptions?.release_date ||
        movie.age_restrict === filterOptions?.age_restrict
    );
    console.log(filteredMovies);

    setFilteredMovies(filteredMovies);
  };

  return (
    <>
      {loading ? (
        <div>Loading....</div>
      ) : !loading && movies ? (
        <div className="row">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <h2>Movies</h2>
            <FilterCustom
              addButtonTitle="Add Movie"
              pathName="/admin/movies/movie-add"
            >
              <ListGroup.Item>
                <select
                  className="form-control search-slt"
                  id="exampleFormControlSelect1"
                  onChange={(e) =>
                    setFilterOptions({
                      ...filterOptions,
                      genre: e.target.value,
                    })
                  }
                >
                  <option>Genre</option>
                  <option>Action</option>
                  <option>Comedy</option>
                  <option>Drama</option>
                  <option>Animation</option>
                  <option>Thriller</option>
                  <option>Horror</option>
                  <option>Romance</option>
                </select>
              </ListGroup.Item>
              <ListGroup.Item>
                <input
                  type="date"
                  className="form-control search-slt"
                  placeholder="Release Date"
                  value={filterOptions.release_date}
                  onChange={(e) =>
                    setFilterOptions({
                      ...filterOptions,
                      release_date: e.target.value,
                    })
                  }
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <select
                  className="form-control search-slt"
                  id="exampleFormControlSelect1"
                  onChange={(e) =>
                    setFilterOptions({
                      ...filterOptions,
                      age_restrict: e.target.value,
                    })
                  }
                >
                  <option>Age Restrict</option>
                  <option>AG</option>
                  <option>AP-12</option>
                  <option>N-15</option>
                  <option>IM-18</option>
                </select>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  onClick={handleClickFilter}
                  className="btn btn-secondary wrn-btn"
                >
                  Filter
                </Button>
              </ListGroup.Item>
            </FilterCustom>
          </div>
          {filteredMovies && filteredMovies !== {}
            ? filteredMovies.map((movie) => {
                return (
                  <Link
                    to={`/admin/movies/${movie._id}`}
                    key={movie._id}
                    style={{
                      width: 250,
                      marginLeft: 20,
                      textDecoration: "none",
                    }}
                  >
                    {movie ? (
                      <Card className="mb-3">
                        <Card.Img
                          variant="top"
                          src={movie?.image_url}
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
                            {movie?.title}
                          </Card.Title>
                          <Card.Footer>
                            <span className="movie_info">
                              {movie?.release_date.split("T")[0].split("-")[0]}
                            </span>
                            <span className="movie_info float-right">
                              <i className="fas fa-star"></i> {movie?.rating}
                            </span>
                          </Card.Footer>
                        </Card.Body>
                      </Card>
                    ) : null}
                  </Link>
                );
              })
            : filteredData.map((movie) => {
                return (
                  <Link
                    to={`/admin/movies/${movie._id}`}
                    key={movie._id}
                    style={{
                      width: 250,
                      marginLeft: 20,
                      textDecoration: "none",
                    }}
                  >
                    {movie ? (
                      <Card className="mb-3">
                        <Card.Img
                          variant="top"
                          src={movie?.image_url}
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
                            {movie?.title}
                          </Card.Title>
                          <Card.Footer>
                            <span className="movie_info">
                              {movie?.release_date.split("T")[0].split("-")[0]}
                            </span>
                            <span className="movie_info float-right">
                              <i className="fas fa-star"></i> {movie?.rating}
                            </span>
                          </Card.Footer>
                        </Card.Body>
                      </Card>
                    ) : null}
                  </Link>
                );
              })}
        </div>
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};

export default MoviesList;
