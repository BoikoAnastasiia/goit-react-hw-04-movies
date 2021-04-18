import React, { Component } from 'react';
import axios from 'axios';
import { apiKey } from '../../services/apiKey';
import PropTypes from 'prop-types';

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
        {reviews.length > 0
          ? reviews.map(({ author, author_details, content, id }) => (
              <ul>
                <li key={id}>
                  <span role="img" aria-label="star" className="rate">
                    ⭐️ {!author_details.rating ? 10 : author_details.rating}
                    /10
                  </span>
                  <img
                    className="reviewsAvatar"
                    src={
                      author_details.avatar_path &&
                      author_details.avatar_path.includes('gravatar')
                        ? author_details.avatar_path.substring(1)
                        : baseUrl + author_details.avatar_path
                    }
                    alt={author}
                  />
                  <span className="reviewDescription">{content}</span>
                </li>
              </ul>
            ))
          : "We don't have any review for this movie so far"}
      </div>
    );
  }
}

Reviews.propTypes = {
  author: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
  author_details: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Reviews;
