import React, {useState, useEffect} from 'react';


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
        <div>
            
            <ul>
            
            {showSearch.map((video) => {
                return (<h4> Title: {video.snippet.title} <br></br> 
                            Description: {video.snippet.description} <br></br>
                            <img src={video.snippet.thumbnails.default.url} alt="img"
                            onClick ={() => handleClick(video.id.videoId)} /> </h4>)
            })}
                
            </ul>
        </div>
     );
}
 
export default DisplaySearch;