import { useLoaderData } from "react-router-dom";
import getPost from "../../utils/getPost";

export default function PostDetails() {
  const post = useLoaderData();
  if (!post) {
    return <div>In post to display</div>;
  }

  return (
    <>
      <h2>{post.author}</h2>
      <p>{post.body}</p>
    </>
  );
}

export async function loader({ params }) {
  const post = await getPost(params?.id);
  return post;

}
