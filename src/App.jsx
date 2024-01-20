import PostsList from "./components/PostsList";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";
import Header from "./components/Header/Header";
import { getPosts } from "./utils";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [modalVisible, setVisible] = useState(false);
  const [listPosts, addPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, triggerReload] = useState(false);

  useEffect(() => {
    async function runEffect() {
      setIsLoading(true);
      const posts = await getPosts();
      setIsLoading(false);
      addPost(posts);
    }
    runEffect();
  }, [reload]);

  return (
    <>
      <Header setVisible={setVisible} />
      <main className="main-container">
        <PostsList posts={listPosts} isLoading={isLoading} />
        <Modal visible={modalVisible} setVisible={setVisible}>
          <NewPost
            setVisible={setVisible}
            posts={listPosts}
            addPost={addPost}
            reload={reload}
            triggerReload={triggerReload}
          />
        </Modal>
        <button
          className="create-button"
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
