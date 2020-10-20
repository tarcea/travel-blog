import React, { useState } from 'react';
import YouTube from 'react-youtube';

function PlayVideo({ id })  {

    const [opts] = useState({
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },})

    return <YouTube videoId={id} opts={opts} onReady={onReady} />;

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default PlayVideo;
