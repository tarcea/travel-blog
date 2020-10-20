import React from 'react';
import play from '../images/playButton.png';



function Video({ video }) {

  return (
    <div>
    <div className="videos-container">
        <div className="video-item" key={video.id}>
            <div className="fake-video" style={{backgroundImage: `url(${video.imgPath})`}}>
              <div>
                <img src={play} alt="" />
              </div>
            </div>
            <div className="video-text">
                <p>{video.title}</p>
            </div>
          </div>
    </div>
    </div>
  );
}

export default Video;
