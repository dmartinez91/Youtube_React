import React from 'react';
import {useForm} from './useForm';
import { Button } from 'react-bootstrap';

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
            <Button type="submit" variant="secondary">Search</Button>{' '}
           
            
            </form>
            
        </div>
     );
}
 
export default SearchBar;