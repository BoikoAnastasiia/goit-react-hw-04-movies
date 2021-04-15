import propTypes from 'prop-types';
import axios from 'axios';
import { apiKey } from './apiKey.js';

const fetchSingleMovie = ({ searchQuery = '' }) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/${searchQuery}/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false
`,
    )
    .then(response => response.results)
    .catch(console.log);
};

export default fetchSingleMovie;

fetchSingleMovie.propTypes = {
  searchQuery: propTypes.string.isRequired,
};
