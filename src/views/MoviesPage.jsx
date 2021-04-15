import Searchbar from '../components/Searchbar';
import React, { Component } from 'react';

class MoviesPage extends Component {
  state = {
    query: '',
    id: null,
    poster_path: null,
    vote_count: null,
    title: null,
    release_date: null,
    overview: null,
    vote_average: 0,
  };

  onChangeQuery = query => {
    this.setState({
      query: query,
      id: null,
      poster_path: null,
      vote_count: null,
      title: null,
      release_date: null,
      overview: null,
      vote_average: 0,
    });
  };

  render() {
    return (
      <div className="moviesContainer">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
