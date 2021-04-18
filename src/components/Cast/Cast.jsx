import React, { Component } from 'react';
import axios from 'axios';
import { apiKey } from '../../services/apiKey';
import PropTypes from 'prop-types';
import defaultActor from './defaultActor.jpg';

export class Cast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=${apiKey}`,
      )
      .catch(console.log);

    this.setState({ cast: response.data.cast });
  }
  render() {
    const { cast } = this.state;
    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
      <div>
        <table>
          <tbody>
            {cast.map(({ name, profile_path, character, credit_id, id }) => (
              <tr key={credit_id}>
                <td key={id}>
                  <img
                    src={profile_path ? baseUrl + profile_path : defaultActor}
                    alt={name}
                    width="60"
                  />
                </td>
                <td key={name} className="actorName">
                  {name}
                </td>
                <td key={character}>{character}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Cast.propTypes = {
  name: PropTypes.string,
  profile_path: PropTypes.string,
  character: PropTypes.string,
  credit_id: PropTypes.number,
  id: PropTypes.number,
};

export default Cast;
