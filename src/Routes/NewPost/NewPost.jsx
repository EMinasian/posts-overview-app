import { Link } from "react-router-dom";
import { useState } from "react";
import NewPostDisplay from "../../components/NewPostDisplay/NewPostDisplay";
import Modal from "../../components/Modal";
import createPost from "../../utils/createPost";
import "../../Global.css";
import "./NewPost.css";

export default function NewPost({ setVisible, reload, triggerReload }) {
  const [authorName, setName] = useState("");
  const [messageText, setText] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const newPost = {
      author: authorName,
      body: messageText,
    };
    await createPost(newPost);
    setVisible(false);
    triggerReload(!reload);
  }

  return (
    <Modal className="new-post-section">
      <form className="input-form" onSubmit={handleSubmit}>
        <h2 className="main-title">Create a New Post</h2>
        <div className="input-field">
          <label htmlFor="author-name" className="new-post-label">
            Author name
          </label>
          <input
            value={authorName}
            onChange={(event) => setName(event.target.value)}
            id="author-name"
            className="input-box"
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="message-text" className="new-post-label">
            Message text
          </label>
          <textarea
            className="input-box input-text-area"
            value={messageText}
            onChange={(event) => {
              setText(event.target.value);
            }}
            required
          />
        </div>
        <button className="button submit-button">Submit</button>
        <Link
          to="/"
          className="button cancel-button"
        >
          Cancel
        </Link>
      </form>
      <NewPostDisplay author={authorName} body={messageText} />
    </Modal>
  );
}
