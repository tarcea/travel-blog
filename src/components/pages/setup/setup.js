import React from 'react';
import './setup.css';

function Setup() {
  return (
    <div className="main-content">
      <div className="search-container">
      <p>All tutorial videos</p>
      <input type="text" />
      </div>
      <div className="videos-container">
        <div className="video-item">
          <div className="fake-video"></div>
        </div>
        <div className="video-item">
          <div className="fake-video"></div>
        </div>
        <div className="video-item">
          <div className="fake-video"></div>
        </div>
        <div className="video-item">
          <div className="fake-video"></div>
        </div>
        <div className="video-item">
          <div className="fake-video"></div>
        </div>
        <div className="video-item">
          <div className="fake-video"></div>
        </div>

      </div>
    </div>
  );
}

export default Setup;
