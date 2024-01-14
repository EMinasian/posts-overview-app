import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost/NewPost";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <NewPost />
      <PostsList />
    </div>
  );
}

export default App;
