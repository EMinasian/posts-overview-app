import React from 'react'
import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage } from "react-icons/md";
import "./Header.css";
import "../../Global.css"

export default function Header() {
  return (
    <header className="header-layout">
      <h2 className="header-title">
        <MdMessage />
        React Posts
      </h2>
      <Link className="button create-button" to='/create-post'>
        <MdPostAdd className="create-icon-post"/>
        New Post
      </Link>
    </header>
  );
}
