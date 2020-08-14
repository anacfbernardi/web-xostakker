import React from 'react';
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
                {TweetsData.tweets.map((tweet, index) => {
                    return (<TweetCard key={index} tweet={tweet} />);
                })}
            </div>
        </>
    );
}

export default Tweets;