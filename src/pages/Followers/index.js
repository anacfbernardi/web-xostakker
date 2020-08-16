import React, { useState } from 'react';

import './styles.css';

function Followers() {
  const [followers, setFollowers] = useState([]);

  return (
    <div className="tweets-wrapper">
      {followers.map((follow) => (
        <div key={follow.id}>{follow.name}</div>
      ))}
    </div>
  );
}

export default Followers;
