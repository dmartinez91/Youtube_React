import React from 'react';
import {useForm} from './useForm';

const SearchBar = (props) => {
    
    const [values, handleChange] = useForm({search: ""})
    
    return ( 
        <div>
            <form>
            <input 
            name="search" 
            value={values.search} 
            onChange={handleChange}
            />
            <button onClick={props.makeSearch(values)}>Search</button>
            
            </form>
            
        </div>
     );
}
 
export default SearchBar;