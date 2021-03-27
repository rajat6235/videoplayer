import React from 'react';
import VideoItem from './VideoItem';
const VideoList=({videos , onVideoSelect })=>{  // we have passed videos itself rather than props so that inside the function we dont have to reference it like props.videos.length // passing onvideoselect as callback from App to videolist
   const renderedlist= videos.map((video)=>{ //videos is any array with many objects and we are refering one video by passing video argument in map this inner function of map will be called one timefor every object inside the videos
    // videoitem component need to be given a key property that is going to be used internally
    //by react  to make sure that it efficiently rerenders our list over time  
   //in key passing each individual video id 
    return<VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>; //taking this video item from map func and passing it as a prop to videoitem // taking the onvideoselect callback and passing it to videoitem
    })
    return<div className="ui relaxed divided list">
        {renderedlist}
    </div>
};
export default VideoList;