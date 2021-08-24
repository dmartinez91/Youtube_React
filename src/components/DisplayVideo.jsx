import React from 'react';
import Comments from './Comments';
import DisplayComments from './DisplayComments';

const DisplayVideo = (props) => {
    const videoUrl = `https://www.youtube.com/embed/${props.showVideo}`
    
    return ( 
        <div>
            <iframe title='youtube-video' id="ytplayer" type="text/html" width="640" height="360"
                src={videoUrl}
                frameborder="0">
            </iframe>

            <Comments makeComment = {props.addComment}/>
            <DisplayComments displayCommentsLikesDislikes = {props.showCommentLikesDislikes}/>

           
            
        </div>
     );
}
 
export default DisplayVideo;