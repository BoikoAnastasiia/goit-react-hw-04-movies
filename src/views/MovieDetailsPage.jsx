import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../components/Searchbar';
import movieApi from '../services/single-movie-api';
import { apiKey } from '../services/apiKey';

class MovieDetailsPage extends Component {
  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.id}?${apiKey}`,
    );
    console.log(response.data);
    this.setState({ ...response.data });
  }

  render() {
    const {
      poster_path,
      vote_count,
      title,
      release_date,
      overview,
      vote_average,
    } = this.state;

    return (
      <div className="moviesContainer">
        <h1> {this.props.match.params.movieId} </h1>
        <SearchBar onSubmit={this.onChangeQuery} />
        <span>Views {vote_count} </span>
        <span>Rate {vote_average} </span>
        <p>{release_date} </p>
        <h1> {title}</h1>
        <img src={poster_path} alt={title} />
        <p>{overview}</p>
      </div>
    );
  }
}

export default MovieDetailsPage;
