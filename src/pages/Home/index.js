import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import Profile from '../Profile';
import Tweets from './components/Tweets';

import tweetsData from '../../data/tweets.json';
import imageLogo from '../../assets/images/xostakker_bird.png';

import './styles.css';
import DefaultPage from '../../components/DefaultPage';

function Home() {
  const [tweetCount, setTweetCount] = useState(0);

  useEffect(() => {
    setTweetCount(tweetsData.tweets.length);
  }, []);

  return (
    <DefaultPage id="home">
      <PageHeader
        image={(<img src={imageLogo} alt="Xostakker" />)}
        headerItems={(
          <>
            <strong className="profile-name">{tweetsData.profiles[0].name}</strong>
            <p className="profile-tweets">{`${tweetCount} tweets`}</p>
          </>
          )}
      />

      <Profile
        profile={tweetsData.profiles[0]}
        following={tweetsData.following.length}
        followers={tweetsData.followers.length}
      />

      <Tweets TweetsData={tweetsData} />

    </DefaultPage>
  );
}

export default Home;
