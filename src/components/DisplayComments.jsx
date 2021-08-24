import React from 'react';


const DisplayComments = (props) => {
    
    
    
    return ( 
        <React.Fragment>
        <table className="table table-bordered border-primary">
        <tr>
            <th className="table-primary">comment</th>
            <th className="table-primary">likes</th>
            <th className="table-primary">dislikes</th>

        </tr>
            {props.showCommentLikesDislikes.map(showComment => (
                <tr key={showComment.id}>
                    
                    <td className="table-primary">{showComment.commentValue}</td>
                    <td className="table-primary">{showComment.likes}</td>
                    <td className="table-primary">{showComment.dislikes}</td>

                </tr>
                
                ))}
    </table>
        </React.Fragment>
     );
}
 
export default DisplayComments;