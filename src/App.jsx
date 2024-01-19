import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";
import Header from "./components/Header/Header";
import posts from "./assets/mockPosts";
import "./App.css";
import { useState } from "react";

function App() {
  const [modalVisible, setVisible] = useState(false);
  const [listPosts, addPost] = useState(posts);
  return (
    <>
      <Header setVisible={setVisible} />
      <main className="main-container">
        <PostsList posts={listPosts} />
        <Modal visible={modalVisible} setVisible={setVisible}>
          <NewPost setVisible={setVisible} posts={listPosts} addPost={addPost}/>
        </Modal>
        <button
          class="create-button"
          onClick={() => {
            setVisible(true);
          }}
        >
          Create
        </button>
      </main>
    </>
  );
}

export default App;
