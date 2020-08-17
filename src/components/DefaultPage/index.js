import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const DefaultPage = ({ children, id }) => (
  <div id={id} className="default-page-wrapper">
    {children}
  </div>
);

DefaultPage.propTypes = {
  children: PropTypes.array,
  id: PropTypes.string.isRequired,
};

DefaultPage.defaultProps = {
  children: null,
};

export default DefaultPage;
