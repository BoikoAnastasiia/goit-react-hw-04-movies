import Searchbar from '../components/Searchbar';
import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import MovieDetailsPage from '../views/MovieDetailsPage';
import axios from 'axios';
import { apiKey } from '../services/apiKey';
import defaultAvatar from './defaultAvatar.jpg';

class MoviesPage extends Component {
  state = {
    query: '',
    movies: [],
    // this.props.location.state.query ||
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

  async fetchMovies() {
    const { query } = this.state;
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}
`,
      )
      .catch(console.log);
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies, query } = this.state;
    const { match } = this.props;

    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    return (
      <div className="moviesContainer">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul className="homepageMoviesList">
          {movies.map(movie => (
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { query },
                // {
                //   from: this.props.location,
                //   search: `${this.props.query}`,
                // },
              }}
              className="homePageLink"
            >
              <li key={movie.id}>
                <img
                  src={
                    !movie.poster_path
                      ? defaultAvatar
                      : baseUrl + movie.poster_path
                  }
                  className="ImageGalleryItem-image"
                  alt={movie.title}
                />
                <h2 className="homepageMovieTitle">{movie.title}</h2>
                <span>
                  ⭐️ <span className="rate">{movie.vote_average}</span>
                </span>
              </li>
            </Link>
          ))}
        </ul>
        <Route
          path={`${match.path}/:movieId`}
          render={props => {
            const movieId = Number(props.match.params.movieId);
            const movie = movies.find(({ id }) => id === movieId);
            console.log('props in render', props);
            return movie ? <MovieDetailsPage {...props} /> : null;
          }}
        />
      </div>
    );
  }
}

export default withRouter(MoviesPage);
