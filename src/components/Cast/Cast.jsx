import React, { Component } from 'react';
import axios from 'axios';
import { apiKey } from '../../services/apiKey';

export class Cast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${apiKey}/credits?api_key=${apiKey}`,
      )
      .catch(console.log);
    this.setState({ cast: response.data.results });
  }
  render() {
    return (
      <div>
        <h1>svsdv</h1>
      </div>
    );
  }
}

export default Cast;
