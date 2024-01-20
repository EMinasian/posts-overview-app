import Posts from "../Posts";
import "./PostsList.css";
import "../../Global.css";

export default function PostsList({ posts, isLoading }) {
  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }
  return (
    <div>
      <h2 className="main-title">Post List</h2>
      {posts.length === 0 ? (
        <p>No posts to be displated</p>
      ) : (
        <ul className="posts-list">
          {posts.map((post) => (
            <Posts key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
    </div>
  );
}
