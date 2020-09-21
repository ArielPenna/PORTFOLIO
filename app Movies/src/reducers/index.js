import {
  GET_MOVIES,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
  MOVIE_DETAIL,
} from "../actions";

const initialState = {
  movies: [], //peliculas favoritas
  moviesLoaded: [], //busqueda de peliculas
  movieDetail: {}, //detalle de pelicula
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_MOVIE_FAVORITE) {
    return {
      ...state,
      movies: state.movies.concat(action.payload),
      //movies:[...state.movies, action.payload] //otra forma con ...
    };
  }
  if (action.type === GET_MOVIES) {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }
  if (action.type === REMOVE_MOVIE_FAVORITE) {
    return {
      ...state,
      movies: state.movies.filter(
        (item) => item.title !== action.payload.title
      ),
    };
  }
  if (action.type === MOVIE_DETAIL) {
    return {
      ...state,
      movieDetail: action.payload,
    };
  }
  return state;
}

export default rootReducer;
