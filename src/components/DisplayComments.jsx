import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

function DisplayComments() {
    
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/youtube')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return ( 
        <div>
        <form> 
        
        <ListGroup>
            {
                posts.map(post => <ListGroupItem key={post.id}>{post.comments}</ListGroupItem>)
            }
        </ListGroup>
        </form>
        </div>

     );
}
 
export default DisplayComments;