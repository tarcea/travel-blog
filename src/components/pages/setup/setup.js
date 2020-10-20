import React from 'react';
import play from '../../images/playButton.png'
import './setup.css';
import Videos from '../../videos/videos';

function Setup() {
  return (
    <div className="main-content">
      <div className="search-container">
      <p>All tutorial videos</p>
      <input type="text" />
      </div>
        <Videos />
    </div>
  );
}

export default Setup;
