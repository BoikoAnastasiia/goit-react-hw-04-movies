import Searchbar from '../components/Searchbar';
import React, { Component } from 'react';
import searhForMovies from '../services/searhForMovies-api';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
  };

  onChangeQuery = query => {
    this.setState({
      query: query,
      movies: [],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    const { query } = this.state;
    searhForMovies(query).then(results => {
      this.setState({ movies: results });
    });
  };

  render() {
    const { movies } = this.state;
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    return (
      <div className="moviesContainer">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul className="homepageMoviesList">
          {movies.map(movie => (
            <li key={movie.id}>
              <img
                src={baseUrl + movie.poster_path}
                className="ImageGalleryItem-image"
                alt={movie.title}
              />
              <h2 className="homepageMovieTitle">{movie.title}</h2>
              <span>
                ⭐️ <span className="rate">{movie.vote_average}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
