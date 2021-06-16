import { ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE } from "../actions/Movie";

const initialState = {
  movies: [],
  error: "",
};

const Movie = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case ADD_MOVIE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default Movie;
