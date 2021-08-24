import React, { useState } from 'react';

const Comments = (props) => {
    
    const [commentValue, setCommentValue] = useState("");
    
    
    

    const handleChange = (event) => {
        setCommentValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newComment = {
            comments: commentValue,
            likes: 0,
            dislikes: 0
        };
        props.makeComment(newComment)
    }

    

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                name="comment" 
                value={commentValue}
                onChange={handleChange}
                />
                <button type="submit">Comment</button>
            </form>
        </div>
    );
}
        
export default Comments;
        



    
 