import Searchbar from '../components/Searchbar';
import React, { Component } from 'react';

class MoviesPage extends Component {
  state = { query: '' };
  render() {
    return (
      <>
        <Searchbar></Searchbar>
        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}

export default MoviesPage;
