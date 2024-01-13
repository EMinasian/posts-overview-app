
import Posts from "./Posts";

const posts = [
  { author: "Jack", text: "Twitter is good!" },
  { author: "Tom", text: "Facebook is not working." },
];

export default function PostsList () {
  return (
    <ul>
      {posts.map(post => <Posts author={post.author} text={post.text} />)}
    </ul>
  );
};