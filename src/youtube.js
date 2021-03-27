import axios from 'axios';

const KEY='AIzaSyAcSF0-g2tTHg78HROLnQO7LZ1s0zfj3uk';
//making a pre configured instance of axios that already has base url 
// and some default parameters loaded into it  
export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3', // so that we will be able to get instance of this axios and we will be able search youtube   
params:{ //contains all query string parameters that we want to have added onto the request   
    part:'snippet',  //snippet summary of the viodeo information like title description link to the video 
maxResults: '5', // maximum number of videos we want to show for the search
 key  : KEY // have to append on our api key to this request(ie request we make) as well inside the query string  
 //whenever we make have to throw our api key into a query string on the url so final result would look like GET https://www.googleapis.com/youtube/v3/search?key=aiz or whaterver it is
 }
})
