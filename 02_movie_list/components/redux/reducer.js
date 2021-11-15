import { GET_MOVIES, GET_MOVIE_BY_ID } from "./actions";

const initialState = {
  movies: [],
  favorites: [],
};

movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [action.payload],
      };

    case GET_MOVIE_BY_ID:
      // console.log(action.payload)
      return {
        ...state,
        movies: [...state.movies, action.payload],
        // movies: state.movies.concat(action.payload)
      };

    default:
      return state;
  }
};

export default movieReducer;
