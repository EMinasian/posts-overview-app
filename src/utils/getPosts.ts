import { BACKEND_URL } from "./consts";

async function getPosts() {
  try {
    const postsResponse = await fetch(`${BACKEND_URL}/posts`);
    const postsJosn = await postsResponse.json()
    return postsJosn.posts
  } catch (e) {
    console.log("posts fetch failed", e);
    return [];
  }
}

export default getPosts;
