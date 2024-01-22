import PostsList from "./Routes/PostsList";
import NewPost from "./Routes/NewPost";
import Modal from "./components/Modal";
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
      </main>
    </>
  );
}

export default App;
