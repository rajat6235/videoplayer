import React from 'react';
import SearchBar from './SearchBar';
import youtube from './youtube';
import VideoList from './VideoList';
import  VideoDetail from './VideoDetail';
class App extends React.Component{
   state={ videos: [], selectedVideo: null };
    //callback method that will be cAlled when someone submits search bar form
    onTextSubmit= async text=>{
      const response=await youtube.get('/search', { // response object has different info about the request that was made  
     params: {
         q:text
     }//youtube.get is asynchronous api request so to interact we have to use promises or async await
     });// first parameter search is the path that we want to request to 
     // second parameter we are passing actually q to tell the search text we want to use  
     // import youtube api and use it to request youtube
     //youtube is preconfigured instance of axios   
    this.setState({videos:response.data.items}); // items property contains array of videos 
    };
    onVideoSelect=(video)=>{ //video is object fetched from youtube api
this.setState({ selectedVideo: video});
    }
    render(){

        return (
            <div className="ui container">
           <SearchBar onFormSubmit={this.onTextSubmit}/> 
              <div className="ui grid">
                <div className="ui row">
                  <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo} /> 
                  </div>
                  <div className="five wide column">
                  <VideoList  onVideoSelect={this.onVideoSelect}  videos={this.state.videos}/>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
      
       //in videodetail we pass prop video not videos as we ourselves determine what we want name to be in videolist there is an array of objects thats why we used videos 
        // but in videodetail we are passing down one single object itself   
        //prop or component name (ie onFormSubmit) is not predefined we can use anyother name aswell
        //the name of the prop and the name of function dont have to be same 

export default App;