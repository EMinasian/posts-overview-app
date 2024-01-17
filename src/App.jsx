import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";
import Header from "./components/Header/Header";
import "./App.css";
import { useState } from "react";

function App() {
  const [modalVisible, setVisible] = useState(false);
  return (
    <>
      <Header setVisible={setVisible}/>
      <main className="main-container">
        <PostsList />
        <Modal visible={modalVisible} setVisible={setVisible}>
          <NewPost setVisible={setVisible}/>
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
