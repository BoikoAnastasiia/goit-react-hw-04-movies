import propTypes from 'prop-types';
import axios from 'axios';
import { apiKey } from './apiKey.js';

const searchForMovies = ({ query }) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}
`,
    )
    .then(response => response.data.results)
    .catch(console.log);
};

export default searchForMovies;

searchForMovies.propTypes = {
  searchQuery: propTypes.string.isRequired,
};
