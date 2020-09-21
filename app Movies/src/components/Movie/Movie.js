import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.props.getMovieDetail(id);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.movie.Title}</h1>
        <div className={"container2"}>
          <div className={"movie-card"}>
            <p>Año de estreno: {this.props.movie.Year}</p>
            <p>Clasificacion: {this.props.movie.Rated}</p>
            <p>Genero: {this.props.movie.Genre}</p>
            <p>Duracion: {this.props.movie.Runtime}</p>
            <p>Director: {this.props.movie.Director}</p>
            <p>Reparto: {this.props.movie.Actors}</p>
            <p>Rating IMDB: {this.props.movie.imdbRating}</p>
          </div>
          <img className={"img"} src={this.props.movie.Poster} />
        </div>
        <p className={"description"}>Sinopsis: {this.props.movie.Plot}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
