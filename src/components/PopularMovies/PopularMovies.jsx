import axios from 'axios';
import Container from '../Container';
import React, { Component } from 'react';
import api from '../../services/apiKey';

class PopularMovies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${api}`,
    );
    console.log(response.data);
    this.setState({ movies: response.data });
  }

  render() {
    return (
      <Container>
        <ul>{}</ul>
      </Container>
    );
  }
}

export default PopularMovies;
