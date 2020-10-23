import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { AiOutlineCloseCircle } from "react-icons/ai";
import play from '../images/playButton.png';
import PlayVideo from './play_video';
import './vid.css';

function Vid({ videos, videosNo }) {

  const initialState = {
      id: null,
      play: false
  };

  const [about, setAbout] = useState(initialState);

  const playMe = () => {
    return document.getElementById("video-frame")
                   .classList.remove('video-disabled')
  }

  const closeMe = () => {
    setAbout(initialState);
    return document.getElementById("video-frame")
                   .classList.add('video-disabled')
  }

  return (
    <div>
    <div className="videos-row-container">
      {videos && videos.slice(0, videosNo).map (video => (
        <div>
        <div className="video-item" key={video.id} >
          <div className="fake-video" style={{backgroundImage: `url(${video.imgPath})`}}>
            <div>
              <img src={play} alt="" onClick={() => {setAbout({id: video.videoId, play: true}); playMe()} } />
            </div>
          </div>
          <div className="video-text">
              <p>{video.title}</p>
          </div>
        </div>

          <div className="video-frame video-disabled" id="video-frame">
                <div className="video-player" id="video-player">
                <p onClick={closeMe}>
                  <IconContext.Provider value={{ className: "gr-close" }}>
                    <AiOutlineCloseCircle />
                  </IconContext.Provider>
                </p>
                  <PlayVideo id={about.id}  />
                </div>
            </div>
        </div>
          ))}

    </div>
    {!videos && <div>Loading...</div>}

    </div>
  );
}

export default Vid;
