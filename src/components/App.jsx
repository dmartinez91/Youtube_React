import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import DisplayVideo from './DisplayVideo';
import DisplaySearch from './DisplaySearch';
import 'bootstrap/dist/css/bootstrap.css';





const App = () => {
   const [displayVideo, setDisplayVideo] = useState('')
   const [videos, setVideos] = useState([])
   const [comments, setComments] = useState([])
    
    useEffect(() => {
        makeGetRequest();

    }, [displayVideo]);



    const makeGetRequest = async (values) =>{
        console.log(values)
        try{
            let response = require('./sampleOutput.json') 
            //let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${values}&key=AIzaSyDPP_0jwJ7O2lH6pJKVBbNwqrs28QmH0lo&part=snippet`)
            setVideos(response.items)
            console.log(response.items)
        }
            
        catch(ex){
            console.log(ex)
        }
    }

    const selectedVideoId = (id) => {
        // updateds statevariable and the rerenders
        setDisplayVideo(id)
    }


    const makePostRequest = async (commentValue) => {
        let response = await axios.post('http://127.0.0.1:8000/youtube', commentValue);
        setComments(response.data)
        console.log(response.data)
    }
    

        return ( 
         
            <div>
                <h1> Youtube Clone </h1>
                <SearchBar makeSearch = {makeGetRequest}/>
                <br></br>
                <DisplayVideo showVideo = {displayVideo} addComment = {makePostRequest} />
                
                <DisplaySearch displaySearch = {videos} selectedVideoId={selectedVideoId} />
                
            </div> 
        );
                

}
 
export default App;