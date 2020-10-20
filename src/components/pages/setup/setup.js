import React, { useState } from 'react';
import './setup.css';
import Videos from '../../videos/videos';
import PlayVideo from '../../videos/play_video';
import { videoData } from '../../../utils/data';


function Setup() {

  const [videos] = useState(videoData);
  const [searchVideo, setSearchVideo] = useState('');

  const mySearch = () => {
    return videos.filter(video => video
      .title.toLowerCase()
      .includes(searchVideo.toLowerCase()))
  }



  return (
    <div className="main-content">
      <div className="search-container">
      <p>All tutorial videos</p>
      <input type="text"
             value={searchVideo}
             onChange={ (e) => setSearchVideo(e.target.value)} />
      </div>
      <Videos videos={mySearch()} />

    </div>
  );
}

export default Setup;
