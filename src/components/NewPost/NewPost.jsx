import { useState } from "react";
import "../../Global.css"
import "./NewPost.css"

export default function NewPost() {
  const [authorName, setName] = useState('');
  const [messageText, setText] = useState('');
  return (
    <form className="separated-section">
      <h2 className="main-title">Create a New Post</h2>
      <div className="input-field">
        <label htmlFor="author-name" className="new-post-label">Author name</label>
        <input
          value={authorName}
          onChange={(event) => setName(event.target.value)}
          id="author-name"
          className="input-box"
        />
      </div>
      <div className="input-field">
        <label htmlFor="message-text" className="new-post-label">Message text</label>
        <textarea
        className="input-box input-text-area"
          value={messageText}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </div>
    </form>
  );
}
