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
        <React.Fragment> 
        <div>
        <form> 
        
        <ListGroup>
        <h1> comments </h1>
            {   
                posts.map(post => <ListGroup.Item key={post.id}>{post.comments} </ListGroup.Item>)
            }
        </ListGroup>
        </form>
        </div>
        </React.Fragment>

     );
}
 
export default DisplayComments;