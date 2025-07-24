import React from "react";
import './Video.css'
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import Recomended from "../../components/Recomended/Recomended";
const Video = () => {
  return(
    <div className="play-container">
      <PlayVideo />
      <Recomended />
    </div>
  );
};

export default Video;
