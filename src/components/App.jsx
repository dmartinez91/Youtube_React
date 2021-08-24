import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import DisplayVideo from './DisplayVideo';
import DisplaySearch from './DisplaySearch';
import 'bootstrap/dist/css/bootstrap.css';




const App = () => {
   const [displayVideo, setDisplayVideo] = useState('')
   const [videos, setVideos] = useState([])
    
    useEffect(() => {
        makeGetRequest();

    }, [displayVideo]);



    const makeGetRequest = async (values) =>{
        console.log(values)
        try{
            // let response = require('./sampleOutput.json') 
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${values}&key=AIzaSyDPP_0jwJ7O2lH6pJKVBbNwqrs28QmH0lo&part=snippet`)
            setVideos(response.data.items)
            console.log(response.data.items)
        }
            
        catch(ex){
            console.log(ex)
        }
    }

    const selectedVideoId = (id) => {
        // updateds statevariable and the rerenders
        setDisplayVideo(id)
    }
    

        return ( 
         
            <div>
                <h1> Youtube Clone </h1>
                <SearchBar makeSearch = {makeGetRequest}/>
                <br></br>
                <DisplayVideo showVideo = {displayVideo}/>
                <DisplaySearch displaySearch = {videos} selectedVideoId={selectedVideoId} />
                
            </div> 
        );
                

}
 
export default App;