import { BACKEND_URL } from "./consts";

async function createPost(newPost: any) {
  try {
    await fetch(`${BACKEND_URL}/posts`, {
        method: 'post',
        body: JSON.stringify(newPost),
        headers: {
          'Content-Type': 'application/json'
        }

    });
  } catch (e) {
    console.log("posts creation failed", e);
  }
}

export default createPost;