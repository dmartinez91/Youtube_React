import React, {Component} from 'react';
import ReactPlayer from 'react-player';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    
    
    
    
    render() { 
        return ( 
            <div>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div> 
         );
    }
}
 
export default App;