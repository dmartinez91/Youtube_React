import React from 'react';



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