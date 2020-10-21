import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import './setup.css';
import Videos from '../../videos/videos';
// import PlayVideo from '../../videos/play_video';
import { videoData } from '../../../utils/data';


function Setup() {
  const [videos] = useState(videoData);
  const [searchVideo, setSearchVideo] = useState('');

  const arraySize = () => {
    let size = 6;
    if (window.innerWidth <= 900) size = 3;
            else size = 6;
      return size;
  }

  const [videosNo, setVideosNo] = useState(arraySize());

  const mySearch = () => {
    return videos.filter(video => video
      .title.toLowerCase()
      .includes(searchVideo.toLowerCase()))
  }

  const moreVideos = () => {
    let no = videosNo + 3;
    if (videosNo >= videos.length) {
      if (window.innerWidth <= 900) no = 3;
          else no = 6;
    }
    return setVideosNo(no);
  }

const moreOrLess = () => {
  let label = " View more";
  if (videosNo >= videos.length) label = "View less";
  return label;
}



  return (
    <div className="main-content">
      <div className="search-container">
      <p>All tutorial videos</p>
      <input type="text"
             value={searchVideo}
             onChange={ (e) => setSearchVideo(e.target.value)} />
      </div>
      <Videos videos={mySearch()} videosNo={videosNo} />
      <div className="more-videos" onClick={moreVideos}>
      <p>
        {moreOrLess()}
        <IconContext.Provider value={{ className: "arrow-down" }}>
          {moreOrLess().includes("less") ?
            (
            <IoIosArrowUp />
            ) : (
              <IoIosArrowDown />
          )}
        </IconContext.Provider>
      </p>
      <p>
        <IconContext.Provider value={{ className: "arrow-down" }}>
          <IoIosArrowDown />
        </IconContext.Provider>
      </p>
    </div>
    </div>
  );
}

export default Setup;
