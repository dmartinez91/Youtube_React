import React from 'react';
import {useForm} from './useForm';

const SearchBar = (props) => {
    
    const {values, handleChange, handleSubmit} = useForm(props.makeSearch)
    
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            name="search" 
            value={values.search} 
            onChange={handleChange}
            />
            <button type="submit">Search</button>
            
            </form>
            
        </div>
     );
}
 
export default SearchBar;