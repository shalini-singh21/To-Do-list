import React from "react"
function Comment({ comments}) {

    return (
        <>
         <ol>
                {comments.map((Comment) => (
                    <li key={Comment.id}><b>{Comment.user}  </b>: {Comment.text} </li>
                
                ))}
        </ol>

        </>
    )
}

export default Comment;