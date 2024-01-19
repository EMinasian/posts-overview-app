import Posts from "../Posts";
import "./PostsList.css";
import "../../Global.css"

export default function PostsList({ posts }) {
  return (
    <div>
      <h2 className="main-title">Post List</h2>
      <ul className="posts-list">
        {posts.map((post) => (
          <Posts author={post.author} text={post.text} />
        ))}
      </ul>
    </div>
  );
}
