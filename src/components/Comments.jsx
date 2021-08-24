import React, { useState } from 'react';

const Comments = (props) => {
    
    const [commentValue, setCommentValue] = useState("");
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    
    const handleChange = (event) => {
        setCommentValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newComment = {
            comments: commentValue,
            likes: likes,
            dislikes: dislikes
        };
        props.makeComment(newComment)
    }

    return ( 
        <div>
            {console.log(commentValue)}
            <form onSubmit={handleSubmit}>
                <input 
                name="comment" 
                value={commentValue}
                onChange={handleChange}
                />
                <button type="submit">Comment</button>
                
                <button
                onClick={() => {
                    setLikes(c => c +1);
                }}
                > +
            </button>
                 Likes: {likes} 
            
            <button
            onClick={() => {
                setDislikes(c => c + 1);
            }}
            >
            +
                </button>
                Dislikes: {dislikes}

            </form>
        </div>
    );
}
        
export default Comments;
        



    
 