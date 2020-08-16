import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function RelationCard({ relation }) {
  return (
    <div className="relation-card">
      <div className="relation-card-header">
        <strong>{relation.name}</strong>
        <p>{relation.account}</p>
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
