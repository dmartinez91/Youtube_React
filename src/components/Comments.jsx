import React, { useState } from 'react';
import {Button} from 'react-bootstrap';

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
        <React.Fragment> 
        <div>
            {console.log(commentValue)}
            <form onSubmit={handleSubmit}>
                <input 
                name="comment" 
                value={commentValue}
                onChange={handleChange}
                />
                
                <Button type="submit" variant="primary">Comment</Button>{' '}

                
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
        </React.Fragment>
    );
}
        
export default Comments;
        



    
 