import React, { Component } from 'react';
import axios from 'axios';
import { apiKey } from '../../services/apiKey';
import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.jpg';

export class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=${apiKey}`,
      )
      .catch(console.log);

    this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;
    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    return (
      <div>
        {reviews.map(({ author, author_details, content, id }) => (
          <div>
            <span role="img" aria-label="star">
              ⭐️ {author_details.rating} /10
            </span>
            <img
              className="reviewsAvatar"
              src={
                author_details.avatar_path.includes('gravatar')
                  ? author_details.avatar_path.substring(1)
                  : author_details.avatar_path ||
                    !author_details.avatar_path.includes('gravatar')
                  ? baseUrl + author_details.avatar_path
                  : author_details.avatar_path
              }
              alt={author}
            />
          </div>
        ))}
      </div>
    );
  }
}

Reviews.propTypes = {
  name: PropTypes.string,
  profile_path: PropTypes.string,
  character: PropTypes.string,
  credit_id: PropTypes.number,
  id: PropTypes.number,
};

export default Reviews;
