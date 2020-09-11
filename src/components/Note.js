import React from 'react'

const Note = (props) => {

    return (
        <div className="container">
          <div className="row">
            {props.title}
          </div>
          <div className="row">
            {props.content}
          </div>
        </div>
    )
}
        
export default Note;
