import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../components/Searchbar';
import movieApi from '../services/single-movie-api';
import { apiKey } from '../services/apiKey';

class MovieDetailsPage extends Component {
  state = {
    query: '',
    id: null,
    poster_path: null,
    vote_count: null,
    title: null,
    release_date: null,
    overview: null,
    vote_average: 0,
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.id}?${apiKey}`,
    );
    console.log(response.data);
    this.setState({ ...response.data });
  }

  onChangeQuery = query => {
    this.setState({
      query: query,
      id: null,
      poster_path: null,
      vote_count: null,
      title: null,
      release_date: null,
      overview: null,
      vote_average: 0,
    });
  };

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
      <>
        <h1> {this.props.match.params.movieId} </h1>
        <SearchBar onSubmit={this.onChangeQuery} />
        <span>Views {vote_count} </span>
        <span>Rate {vote_average} </span>
        <p>{release_date} </p>
        <h1> {title}</h1>
        <img src={poster_path} alt={title} />
        <p>{overview}</p>
      </>
    );
  }
}

export default MovieDetailsPage;
