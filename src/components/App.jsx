import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayVideo: []
         }
    }
    

    async makeGetRequest(){
        try{
            let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=dogsgsp&key=AIzaSyDPP_0jwJ7O2lH6pJKVBbNwqrs28QmH0lo&part=snippet')
            console.log(this)
            this.setState({
                displayVideo: response.data
            });
        }
        catch(ex){
            console.log(ex)
        }
    }

    
    
    render() { 
        return ( 

            <div>
                <h1> Youtube Clone </h1>
                
                <iframe title='youtube-video' id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${this.state.displayVideo}?autoplay=1&origin=http://example.com`}
                frameborder="0"></iframe>
                
            </div> 

         );
    }
}
 
export default App;