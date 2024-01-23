import { Outlet, useLoaderData } from "react-router-dom";
import Posts from "../../components/Posts";
import { getPosts } from "../../utils";
import "./PostsList.css";
import "../../Global.css";

export default function PostsList() {
  const posts = useLoaderData();

  return (
    <div>
      <Outlet />
      <h2 className="main-title">Post List</h2>
      {posts === undefined || posts.length === 0 ? (
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

export async function loader() {
  const posts = await getPosts();
  return posts;
}
