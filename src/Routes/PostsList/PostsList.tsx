import React from "react";
import { Outlet, useLoaderData, Link } from "react-router-dom";
import Posts from "../../components/Posts";
import { getPosts } from "../../utils";
import "./PostsList.css";
import "../../Global.css";

export default function PostsList() {
  const posts = useLoaderData() as Array<any>;

  return (
    <div>
      <Outlet />
      <h2 className="main-title">Post List</h2>
      {posts === undefined || posts?.length === 0 ? (
        <p>No posts to be displated</p>
      ) : (
        <ul className="posts-list">
          {posts.map((post) => (
            <div key={post?.id}>
              <Link to={`/${post.id}`} className="post-box">
                <Posts author={post?.author} body={post?.body} />
              </Link>
            </div>
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
