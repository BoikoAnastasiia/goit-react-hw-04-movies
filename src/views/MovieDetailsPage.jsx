import React, { Component } from 'react';
import axios from 'axios';
import { apiKey } from '../services/apiKey';
import Cast from '../components/Cast';
import { Link, Route } from 'react-router-dom';

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

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || '/movies');
  };

  render() {
    const {
      poster_path,
      vote_count,
      title,
      overview,
      vote_average,
      genres,
      id,
    } = this.state;
    const { match } = this.props;

    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
      <>
        <div className="moviesContainer">
          <button
            type="button"
            className="buttonBack"
            onClick={this.handleGoBack}
          ></button>
          <div className="singleMovieContainer">
            <div className="singleMoviePic">
              <img src={baseUrl + poster_path} width="400px" alt={title} />
            </div>
            <div className="singleMovieDescription">
              <h1 className="movieName"> {title}</h1>
              <p className="genres">
                {genres
                  ? genres
                      .map(genre => genre.name)
                      .join(', ')
                      .toLowerCase()
                  : null}
              </p>
              <p>
                <span>👁 {vote_count} </span>
                <span>⭐️ {vote_average} </span>
              </p>

              <p>{overview}</p>
            </div>
          </div>
          <div className="castReviews">
            <Link to={`${match.url}/${id}/Cast`} className="castLink">
              Cast
            </Link>

            <Link to={`${match.url}/${id}/Review`} className="castLink">
              Review
            </Link>
          </div>
          <Route
            path={`${match.path}/:movieId/Cast`}
            render={props => {
              const movieId = Number(props.match.params.movieId);

              return id === movieId ? <Cast {...props} /> : null;
            }}
          />
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
