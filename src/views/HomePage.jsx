import axios from 'axios';
import { Component } from 'react';
import { apiKey } from '../services/apiKey';
import { Link, withRouter } from 'react-router-dom';

class HomePage extends Component {
  state = { movies: [] };

  async componentDidMount() {
    const response = await axios
      .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
      .catch(console.log);
    this.setState({ movies: response.data.results });
  }

  render() {
    const { movies } = this.state;
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    console.log(this.props.location);
    return (
      <div className="moviesContainer">
        <h1 className="homepageMoviesHeader">Trending today</h1>
        <ul className="homepageMoviesList">
          {movies.map(movie => (
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: this.props.location },
              }}
              className="homePageLink"
            >
              <li key={movie.id}>
                <img
                  src={baseUrl + movie.poster_path}
                  className="ImageGalleryItem-image"
                  alt={movie.title}
                />
                <h2 className="homepageMovieTitle">{movie.title}</h2>
                <span role="img" aria-label="star">
                  ⭐️ <span className="rate">{movie.vote_average}</span>
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomePage);
