import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function RelationCard({ relation }) {
  function getProfileImage() {
    const images = require.context('../../../../assets/images/profiles', true);
    try {
      return images(`./${relation.account.replace('@', '')}.png`);
    } catch (err) {
      return images('./no_profile.png');
    }
  }

  return (
    <div className="relation-card">
      <img
        className="relation-card-profile-image"
        src={getProfileImage()}
        alt={relation.account}
      />

      <div className="relation-card-info">
        <strong>{relation.name}</strong>
        <p>{relation.account}</p>
        <span>{relation.bio}</span>
      </div>

      <div className="relation-card-relation">
        <button type="button"><span>Follow</span></button>
      </div>
    </div>
  );
}

RelationCard.propTypes = {
  relation: PropTypes.object,
};

RelationCard.defaultProps = {
  relation: {},
};

export default RelationCard;
