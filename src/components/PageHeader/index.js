import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const PageHeader = ({ image, headerItems }) => (
  <div className="header-wrapper">
    {image}
    <div className="header-text">
      {headerItems}
    </div>
  </div>
);

PageHeader.propTypes = {
  image: PropTypes.element,
  headerItems: PropTypes.element,
};

PageHeader.defaultProps = {
  image: null,
  headerItems: null,
};

export default PageHeader;
