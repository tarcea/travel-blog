import React, { useState } from 'react';
import play from '../images/playButton.png';
import PlayVideo from './play_video';
import './videos.css';

function Videos({ videos, videosNo }) {
  //const [videos, setVideos] = useState(videoData);

  // useEffect(() => {
  //   setTimeout( async () => {
  //     // const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  //     // const data = await res.json();
  //     setVideos(videoData);
  //   }, 500)

  // })
  const [id, setId] = useState(null);

  return (
    <div>
    <div className="videos-container">
      {videos && videos.slice(0, videosNo).map (video => (
        <div className="video-item" key={video.id} >
            <div className="fake-video" style={{backgroundImage: `url(${video.imgPath})`}}>
              <div>
                <img src={play} alt="" onClick={() => setId(video.videoId)} />
              </div>
            </div>
            <div className="video-text">
                <p>{video.title}</p>
            </div>
          </div>
          ))}
    </div>
    {!videos && <div>Loading...</div>}
    <div className="video-player">
      <PlayVideo id={id} />
    </div>
    </div>
  );
}

export default Videos;
