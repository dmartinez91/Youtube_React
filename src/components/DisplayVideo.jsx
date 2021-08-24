import React from 'react';
import Comments from './Comments';

const DisplayVideo = (props) => {
    const videoUrl = `https://www.youtube.com/embed/${props.showVideo}`
    
    return ( 
        <div>
            <iframe title='youtube-video' id="ytplayer" type="text/html" width="640" height="360"
                src={videoUrl}
                frameborder="0">
            </iframe>

            <Comments makeComment = {props.addComment}/>
            
        </div>
     );
}
 
export default DisplayVideo;