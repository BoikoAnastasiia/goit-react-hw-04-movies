import React, { Component } from 'react';
import SearchBar from '../components/Searchbar';
import fetchSingleMovie from '../services/single-movie-api';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    vote_count: null,
    title: null,
    overview: null,
    vote_average: null,
    genres: null,
  };

  componentDidMount() {
    fetchSingleMovie(this.props.match.params.id).then(response =>
      // this.setState({ ...response }),
      console.log(...response),
    );
  }

  render() {
    const {
      poster_path,
      vote_count,
      title,
      overview,
      vote_average,
      genres,
    } = this.state;

    return (
      <div className="moviesContainer">
        <h1> {this.props.match.params.movieId} </h1>
        <span>Views {vote_count} </span>
        <span>Rate {vote_average} </span>
        <p>
          {/* {genres.map(genre => (
            <span>{genre.name} </span>
          ))} */}
        </p>
        <h1> {title}</h1>
        <img src={poster_path} alt={title} />
        <p>{overview}</p>
      </div>
    );
  }
}

export default MovieDetailsPage;
