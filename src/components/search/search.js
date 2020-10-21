import React, { useState } from 'react';
import { videoData } from '../../utils/data';
import Videos from '../videos/videos';

function Search() {
  const [videos] = useState(videoData);
  const [searchVideo, setSearchVideo] = useState('');

  // const editSearchVideo = (e) => {
  //   setSearchVideo(e.target.value)
  //   // console.log(searchVideo)
  // }
  const mySearch = () => {
    return videos.filter(video => video.title.toLowerCase().includes(searchVideo.toLowerCase()))
    // videos.filter(video => video.title.toLowerCase().includes(searchVideo.toLowerCase()))
  }

  // useEffect(() => {
  //   setTimeout( async () => {
  //     // const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  //     // const data = await res.json();
  //     setVideos(videoData);
  //   }, 500)

  // })

  return (
    <div>
      <input type="text"
             value={searchVideo}
             onChange={ (e) => setSearchVideo(e.target.value)} />
       <Videos videos={mySearch()} />
    </div>
  );
}

export default Search;

