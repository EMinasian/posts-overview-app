import { BACKEND_URL } from "./consts";

async function getPost(postId: any) {
    try {
        const postsResponse = await fetch(`${BACKEND_URL}/posts/${postId}`);
        const postsJosn = await postsResponse.json()
        console.log(postsJosn)
        return postsJosn.post
    } catch (error) {
        console.log(error, `In fetching post ${postId}`)
    }
}

export default getPost;