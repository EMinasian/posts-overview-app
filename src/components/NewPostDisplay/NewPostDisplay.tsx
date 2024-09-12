import React from 'react'
import Posts from "../Posts";
import "./NewPostDisplay.css"
import '../../Global.css'

export default function NewPostDisplay({author, body}: { author: string, body: string}) {

  if (!author && !body) {
    return (<></>);
  }
  return (
    <div className="display-new-post">
      <Posts author={author} body={body}/>
      <p className="normal-text">The Post will Look Like This!</p>
    </div>
  );
}
