import React from 'react';
import PropTypes from 'prop-types';
import TweetCard from '../TweetCard';

import './styles.css';

function Tweets({ TweetsData }) {
  return (
    <>
      <div className="tweets-header">
        <div className="tweet-header-box">
          <p>Tweets</p>
        </div>
        <div className="tweet-header-box-inactive">
          <p>Tweets & replies</p>
        </div>
        <div className="tweet-header-box-inactive">
          <p>Media</p>
        </div>
        <div className="tweet-header-box-inactive">
          <p>Likes</p>
        </div>
      </div>

      <div className="tweets-wrapper">
        {TweetsData.tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} profile={TweetsData.profiles[0]} />
        ))}
      </div>
    </>
  );
}

Tweets.propTypes = {
  TweetsData: PropTypes.object,
};

Tweets.defaultProps = {
  TweetsData: {},
};

export default Tweets;
