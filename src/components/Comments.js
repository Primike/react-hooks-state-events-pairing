import React, {useState} from "react";

function Comments({comments}) {

    const [hidden, setHidden] = useState(false)

    function hideComments() {
        if(hidden) {
            setHidden(false)
        } else {
            setHidden(true)
        }
    }
    let commentList = comments.map(comment => {
        return (
            <div key = {comment.id}>
                <p className = "comment-user">{comment.user}</p>
                <p>{comment.comment}</p>
            </div>
        )
    })

    return (
        <div className = "comments-div">
            <button onClick = {hideComments}>{hidden ? "Show Comments" : "Hide Comments"}</button>
            <hr></hr>
            {hidden ? 
                <></> 
                    :
                <>
                    <h3>{comments.length} Comments</h3>
                        {commentList}
                </>
            }
        </div>
    )
}

export default Comments