import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import axios from 'axios';
import Youtube from './Youtube/Youtube'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    

    
    
    render() { 
        return ( 

            <div>
                {Youtube}
            </div> 

         );
    }
}
 
export default App;