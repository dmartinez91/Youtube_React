import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import DisplayVideo from './DisplayVideo';
import DisplaySearch from './DisplaySearch';




const App = () => {
   const [displayVideo, setDisplayVideo] = useState('x2Bq9WGMHsI')
   const [videos, setVideos] = useState([])
    
    useEffect(() => {
        makeGetRequest();
    }, []);


    const makeGetRequest = async (values) =>{
        console.log(values)
        try{
            let response = require('./sampleOutput.json') 
            // let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${values}&key=AIzaSyCDKziCzx2dBMt7o3nTQOkpU0upTpqHT_c&part=snippet`)
            // setDisplayVideo(response.data)
            setVideos(response.items)
            console.log(response.items)
        }
        catch(ex){
            console.log(ex)
        }
    }

        
    

        return ( 
         
            <div>
                <h1> Youtube Clone </h1>
                <SearchBar makeSearch = {makeGetRequest}/>
                <br></br>
                <DisplayVideo showVideo = {displayVideo}/>
                <DisplaySearch showSearch = {displayVideo}/>
                <h1> Search Results </h1>
                {videos.map((video) => {
                    return (<h4> Video Id: {video.id.videoId} Description: {video.snippet.description} </h4>)
                })}
            </div> 
        );
                

}
 
export default App;