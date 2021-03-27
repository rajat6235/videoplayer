import React from 'react';
import './Videotem.css'
const VideoItem =({video,onVideoSelect})=>{ //props object contain a video property
    // containing info abt a particular video
  //we put a arrow function in onclick as we want to onvideo select with video
  // (as we want to call onvideo select with the video that was passed to this 
  //particular video item component) argumernt if we dont pass arrow function 
  //this onvideoselect func the it will be called but wont be called with that video 
  return(
  <div onClick={()=>onVideoSelect(video)} className=" video-item item "> 
    <img 
    alt={video.snippet.title}
    className="ui image"
     src={video.snippet.thumbnails.medium.url}/>
    <div className="content">
    <div className="header">
    {video.snippet.title}
    </div>
    </div>
    </div>
  );
};
export default VideoItem;