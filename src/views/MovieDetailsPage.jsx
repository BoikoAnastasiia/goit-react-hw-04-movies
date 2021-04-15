import React, { Component } from 'react';

import axios from 'axios';
import { apiKey } from '../services/apiKey';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    vote_count: null,
    title: null,
    overview: null,
    vote_average: null,
    genres: null,
  };

  async componentDidMount() {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${apiKey}
`,
      )
      .catch(console.log);
    this.setState({ ...response.data });
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

    console.dir(genres);
    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
      <div className="moviesContainer">
        <div className="singleMovieContainer">
          <div className="singleMoviePic">
            <img src={baseUrl + poster_path} width="400px" alt={title} />
          </div>
          <div className="singleMovieDescription">
            <h1> {title}</h1>
            {/* <p> {genres.map(genre => genre.name).join(' , ')} </p> */}
            <span>👁 {vote_count} </span>
            <span>⭐️ {vote_average} </span>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
