import Posts from "../Posts";
import posts from "../../assets/mockPosts.json";
import "./PostsList.css";

export default function PostsList() {
  return (
    <ul className="posts-list">
      {posts.map((post) => (
        <Posts author={post.author} text={post.text} />
      ))}
    </ul>
  );
}
