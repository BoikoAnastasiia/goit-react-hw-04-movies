import propTypes from 'prop-types';
import axios from 'axios';
import { apiKey } from './apiKey.js';

const fetchSingleMovie = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}
`,
    )
    .then(response => response.results)
    .catch(console.log);
};

export default fetchSingleMovie;

fetchSingleMovie.propTypes = {
  searchQuery: propTypes.string.isRequired,
};
