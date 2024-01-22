import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostDetails from "./Routes/PostDetails";
import RootLayout from "./Routes/RootLayput";
import PostsList from "./Routes/PostsList";
import NewPost from "./Routes/NewPost";
import "./main.css";

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {path: '/', element: <PostsList />, children: [
      {path: '/create-post', element: <NewPost />}
    ]},
    {path: '/post-details', element: <PostDetails />}
  ]}
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="layout">
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);
