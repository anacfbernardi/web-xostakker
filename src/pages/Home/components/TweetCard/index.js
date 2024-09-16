import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function TweetCard({ tweet, profile }) {
  const data = new Date(tweet.date);
  return (
    <div className="tweet-card">
      <div className="tweet-card-header">
        <strong>{profile.name}</strong>
        <p>{`  ${profile.account} · ${data.toLocaleString('default', { month: 'short' })} ${data.getDate()}, ${data.getFullYear()}`}</p>
      </div>

      <div className="tweet-card-tweet">
        {tweet.tweet}
      </div>
    </div>
  );
}

TweetCard.propTypes = {
  tweet: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

export default TweetCard;
