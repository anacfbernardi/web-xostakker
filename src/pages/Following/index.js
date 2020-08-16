import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import followingRepository from '../../repositories/following';
import DefaultPage from '../../components/DefaultPage';
import PageHeader from '../../components/PageHeader';
import ArrowBack from '../../assets/images/icons/ArrowBack';

import './styles.css';
import Loader from '../../components/Loader';

function Following() {
  const history = useHistory();
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  function backPage() {
    history.push('/');
  }

  function Loading() {
    return (
      <div className="loader-wrapper">
        <Loader />
      </div>
    );
  }

  useEffect(() => {
    followingRepository
      .getAll()
      .then((dados) => setFollowing(dados));
    setLoading(false);
  }, []);

  return (
    <DefaultPage id="following">
      <PageHeader
        image={(
          <div className="arrow-back-wrapper">
            <ArrowBack className="arrow-back" onClick={backPage} />
          </div>
        )}
        headerItems={(
          <>
            <strong className="profile-name">Xostake</strong>
            <p className="profile-account">@msk_szostak</p>
          </>
          )}
      />

      <div className="tweets-header">
        <div className="tweet-header-box">
          <p>Followers</p>
        </div>
        <div className="tweet-header-box-inactive">
          <p>Following</p>
        </div>
      </div>

      {loading
        ? Loading()
        : (
          <div className="tweets-wrapper">
            {following.map((follow) => (
              <div key={follow.id}>{follow.name}</div>
            ))}
          </div>
        ) }

    </DefaultPage>
  );
}

export default Following;
