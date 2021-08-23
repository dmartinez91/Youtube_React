import React from 'react';

const DisplayVideo = (props) => {
    return ( 
        <div>
            <iframe title='youtube-video' id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${props.showVideo}?autoplay=1&origin=http://example.com`}
                frameborder="0">

            </iframe>
        </div>
     );
}
 
export default DisplayVideo;