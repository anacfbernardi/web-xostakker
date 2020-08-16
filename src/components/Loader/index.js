import React from 'react';

import loading from '../../assets/images/xostake_face.png';
import './styles.css';

const Loader = () => (
  <img src={loading} alt="Carregando" className="loader" />
);

export default Loader;
