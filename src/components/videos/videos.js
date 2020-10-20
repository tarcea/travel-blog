import React, { useState, useEffect } from 'react';
import play from '../images/playButton.png';
import './videos.css';
import { videoData } from '../../utils/data';

function Videos() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setTimeout( async () => {
      // const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      // const data = await res.json();
      setVideos(videoData);
    }, 500)

  })

  return (
    <div>
    <div className="videos-container">
      {videos && videos.slice(0, 6).map (video => (
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
          ))}

    </div>
    {!videos && <div>Loading...</div>}
    </div>
  );
}

export default Videos;
