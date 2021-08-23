import React, {useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';



const App = () => {
   const [displayVideo, setDisplayVideo] = useState('x2Bq9WGMHsI')
    

    const makeGetRequest = async (values) =>{
        console.log(values)
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${values}&key=AIzaSyB1fyZlIT8V91aGqkYrRi-gq3VCgrSGcS8&part=snippet`)
            console.log(response.data)
            setDisplayVideo(response.data)
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
                <iframe title='youtube-video' id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${displayVideo}?autoplay=1&origin=http://example.com`}
                frameborder="0"></iframe>
                
            </div> 

         );
}
 
export default App;