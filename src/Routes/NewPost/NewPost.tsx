import React from "react";
import { Link, Form, redirect } from "react-router-dom";
// import NewPostDisplay from "../../components/NewPostDisplay/NewPostDisplay";
import Modal from "../../components/Modal";
import createPost from "../../utils/createPost";
import "../../Global.css";
import "./NewPost.css";

export default function NewPost() {
  return (
    <Modal>
      <div className="new-post-section">
        <Form method="post" className="input-form">
          <h2 className="main-title">Create a New Post</h2>
          <div className="input-field">
            <label htmlFor="author-name" className="new-post-label">
              Author name
            </label>
            <input
              name="author"
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
              name="body"
              required
            />
          </div>
          <button className="button submit-button">Submit</button>
          <Link to="/" className="button cancel-button">
            Cancel
          </Link>
        </Form>
        {/* <NewPostDisplay author={authorName} body={messageText} /> */}
      </div>

    </Modal>
  );
}

export async function action({ request }: { request: Request}) {
  const data = await request.formData();
  const newPost = {
    author: await data.get("author"),
    body: await data.get("body"),
  };
  await createPost(newPost);
  return redirect("/");
}
