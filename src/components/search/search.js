import React, { useState, useEffect } from 'react';
import { videoData } from '../../utils/data';
import Video from '../video/video';

function Search() {
  const [videos, setVideos] = useState(videoData);
  const [searchVideo, setSearchVideo] = useState('');

  const editSearchVideo = (e) => {
    setSearchVideo(e.target.value)
    // console.log(searchVideo)
  }

  const mySearch = () => {
    videos &&
    videos.filter(video => video.title.toLowerCase().includes(searchVideo.toLowerCase()))
  }

  useEffect(() => {
    setTimeout( async () => {
      // const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      // const data = await res.json();
      setVideos(videoData);
    }, 500)

  })

  return (
    <div>
      <input type="text"
       value={searchVideo}
       onChange={editSearchVideo} />
       <Video video={mySearch()} />
    </div>
  );
}

export default Search;

