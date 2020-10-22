import React, { useState } from 'react';
import YouTube from 'react-youtube';

function PlayVideo({ id })  {

  const videoSize = () => {
      let opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      },};
      (window.innerWidth <= 900) ? ((opts.height = 200) && (opts.width = 300)) : ((opts.height = 390) && (opts.width = 640));
        return opts;
    }
  const [opts] = useState(videoSize());

    return <YouTube videoId={id} opts={opts} onReady={onReady} />;

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();

  }
}

export default PlayVideo;
