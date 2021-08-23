import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import DisplayVideo from './DisplayVideo';
import RelatedVideos from './RelatedVideos';



const App = () => {
   const [displayVideo, setDisplayVideo] = useState('')
   const [displaySearch, setDisplaySearch] = useState('')
   
    
    useEffect(() => {
        makeGetRequest();
    }, [])


    const makeGetRequest = async (values) =>{
        console.log(values)
        try{
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${values}&key=AIzaSyCDKziCzx2dBMt7o3nTQOkpU0upTpqHT_c&part=snippet`)
            console.log(response.data)
            setDisplaySearch(response.data)
                
            
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
                <RelatedVideos showSearch = {displaySearch}/>
            </div> 
        );
    

         
                

}
 
export default App;