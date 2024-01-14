import Posts from "../Posts";
import posts from "../../assets/mockPosts.json";
import "./PostsList.css";
import "../../Global.css"

export default function PostsList() {
  return (
    <div className="separated-section">
      <h2 className="main-title">Post List</h2>
      <ul className="posts-list">
        {posts.map((post) => (
          <Posts author={post.author} text={post.text} />
        ))}
      </ul>
    </div>
  );
}
