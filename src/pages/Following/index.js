import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBack from '../../assets/images/icons/ArrowBack';
import DefaultPage from '../../components/DefaultPage';
import followingRepository from '../../repositories/following';
import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function Following() {
  const idProfile = 1;
  const history = useNavigate();
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  function backPage() {
    history('/');
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
      .getByIdProfile(idProfile)
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
        <div className="tweet-header-box-inactive">
          <p>Followers</p>
        </div>
        <div className="tweet-header-box">
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
