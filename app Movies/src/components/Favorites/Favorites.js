import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../../actions/index";
import { Link } from "react-router-dom";
import "./Favorites.css";
import {
  getMovies,
  addMovieFavorite,
  removeMovieFavorite,
  getMovieDetail,
} from "../../actions";

export class ConnectedList extends Component {
  render() {
    return (
      <div classNmae="divfav">
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies &&
            this.props.movies.map((el, i) => (
              <li>
                <button
                  className={"cnt"}
                  on
                  onClick={() =>
                    this.props.removeMovieFavorite({
                      title: el.title,
                      id: el.imdbID,
                    })
                  }
                >
                  X
                </button>
                {el.title}{" "}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}
export default connect(mapStateToProps, {
  addMovieFavorite,
  removeMovieFavorite,
  getMovieDetail,
  getMovies,
})(ConnectedList);
