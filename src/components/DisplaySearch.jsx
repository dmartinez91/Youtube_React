import React, {useState, useEffect} from 'react';
import {ListGroup} from 'react-bootstrap'


const DisplaySearch = (props) => {    
    const [showSearch, setShowSearch] = useState([]);

    useEffect(() => {
        // parse out the info before adding it to state
        setShowSearch(props.displaySearch)
    },[props.displaySearch])

    const handleClick = (id) => {
        props.selectedVideoId(id)
    }

    return ( 
        <div class="d-flex align-items-end flex-column bd-highlight mb-3">
            
            <div>
            
            {showSearch.map((video) => {
                return ( <div class="p-2 bd-highlight"> Title: {video.snippet.title} <br></br>
                            <img src={video.snippet.thumbnails.default.url} alt="img"
                            onClick ={() => handleClick(video.id.videoId)} /> </div>)
            })}
                
            </div>
        </div>
     );
}
 
export default DisplaySearch;