import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import ArrowBack from '../../assets/images/icons/ArrowBack';
import DefaultPage from '../../components/DefaultPage';
import followersRepository from '../../repositories/followers';
import followingRepository from '../../repositories/following';
import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import RelationCard from './components/RelationCard';

function Relations() {
  const idProfile = 1;
  const history = useNavigate();
  const [pageType, setPageType] = useState();
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  function definePageType(type) {
    setPageType(type);
  }

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

  async function loadDataByType() {
    setLoading(true);

    if (pageType === '/following') {
      await followingRepository
        .getByIdProfile(idProfile)
        .then((dados) => setFollowing(dados));
    } else if (pageType === '/followers') {
      await followersRepository
        .getByIdProfile(idProfile)
        .then((dados) => setFollowers(dados));
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  function renderDataByType() {
    const data = pageType === '/following' ? following : followers;

    return (
      <div className="relations-wrapper">
        {data.map((item) => (
          <RelationCard key={item.id} relation={item} />
        ))}
      </div>
    );
  }

  useEffect(() => {
    definePageType(window.location.pathname);
  }, []);

  useEffect(() => {
    loadDataByType();
    // eslint-disable-next-line
  }, [pageType]);

  return (
    <DefaultPage id="relations">
      <PageHeader
        image={(
          <div className="arrow-back-wrapper">
            <ArrowBack className="arrow-back" onClick={() => backPage()} />
          </div>
        )}
        headerItems={(
          <>
            <strong className="profile-name">Xostake</strong>
            <p className="profile-account">@msk_szostak</p>
          </>
          )}
      />

      <div className="relation-tabs">
        <Link
          to="/followers"
          onClick={() => definePageType('/followers')}
          className={pageType === '/followers' ? 'relation-tabs-box' : 'relation-tabs-box-inactive'}
        >
          <p>Followers</p>
        </Link>

        <Link
          to="/following"
          onClick={() => definePageType('/following')}
          className={pageType === '/following' ? 'relation-tabs-box' : 'relation-tabs-box-inactive'}
        >
          <p>Following</p>
        </Link>
      </div>

      {loading
        ? Loading()
        : renderDataByType()}

    </DefaultPage>
  );
}

export default Relations;
