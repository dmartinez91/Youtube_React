import React from 'react';
import DisplayVideo from './DisplayVideo';


const DisplaySearch = (props) => {    
    return ( 
        <div>
            
            <ul>
                {props.showSearch}
                
            </ul>
        </div>
     );
}
 
export default DisplaySearch;