import { MdPostAdd, MdMessage } from "react-icons/md";
import "./Header.css";
import "../../Global.css"

export default function Header({ setVisible }) {
  return (
    <header className="header-layout">
      <h2 className="header-title">
        <MdMessage />
        React Posts
      </h2>
      <button className="create-button" onClick={() => setVisible(true)}>
        <MdPostAdd className="create-icon-post"/>
        New Post
      </button>
    </header>
  );
}
