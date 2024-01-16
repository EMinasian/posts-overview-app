import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";
import "./App.css";
import { useState } from "react";

function App() {
  const [modalVisible, setVisible] = useState(false);
  return (
    <div className="main-container">
      <PostsList />
      <Modal visible={modalVisible} setVisible={setVisible}>
        <NewPost />
      </Modal>
      <button
        class="create-button"
        onClick={() => {
          setVisible(true);
        }}
      >
        Create
      </button>
    </div>
  );
}

export default App;
