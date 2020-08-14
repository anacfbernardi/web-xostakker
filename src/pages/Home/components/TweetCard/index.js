import React from 'react';

import './styles.css';

function TweetCard({ tweet }) {
    const data = new Date(tweet.date);
    return (
        <div className="tweet-card">
            <div className="tweet-card-header">
                <strong>{tweet.name}</strong>
                <p>{`  ${tweet.account} · ${data.toLocaleString('default', { month: 'short' })} ${data.getDate()}, ${data.getFullYear()}`}</p>
            </div>

            <div className="tweet-card-tweet">
                {tweet.tweet}
            </div>
        </div>
    );
}

export default TweetCard;