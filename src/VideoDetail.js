import React from 'react';
const VideoDetail=({video})=>{
    // adding a simple check as we set selectedvideo in state as null  so to avoid error
    if (!video){ // if there is no video 
        return<div> loading..</div>
    }
    const videoSrc =`https://www.youtube.com/embed/${video.id.videoId}` // the source link for the iframe 
    //using backticks from es15
    return <div> 
    <div className="ui embed">
        <iframe title='videoplayer' src ={ videoSrc}/>
    </div>
    <div className="ui segment">
    <h4 className="ui header">   {video.snippet.title} </h4>
  <p>
      {video.snippet.description}
  </p>
  </div>
  </div>
}
export default VideoDetail;