import React from 'react';
import {useForm} from './useForm';

const Comments = (props) => {
    
    const {values, handleChange, handleSubmit} = useForm(props.addComment)

    
    return ( 
        <div>
        <input> </input>
        <form onSubmit={handleSubmit}>
        <input 
        name="search" 
        value={values.search} 
        onChange={handleChange}
        />
        <button type="submit">Comment</button>
        
        </form>
        
    </div>

     );
}
 
export default Comments;