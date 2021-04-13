import propTypes from 'prop-types';

import axios from 'axios';
const key = 'bdd7600a7ae863581dc1485cc54230c3';

const fetchMovies = ({ searchQuery = '' }) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/${searchQuery}/movie?api_key=${key}&language=en-US&page=1&include_adult=false
`,
    )
    .then(response => response.results)
    .catch(console.log);
};

export default { fetchMovies };

fetchMovies.propTypes = {
  searchQuery: propTypes.string.isRequired,
};
