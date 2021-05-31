import React from "react";

function Note(props) {

  return (
    <div className="note">
      <p><h1>{props.title}</h1></p>
      <p>{props.content} </p>
      
    </div>
  );
}

export default Note;
