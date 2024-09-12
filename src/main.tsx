import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostDetails, { loader as postDetailsLoader } from "./Routes/PostDetails";
import RootLayout from "./Routes/RootLayput";
import PostsList, { loader as postsLoader } from "./Routes/PostsList";
import NewPost, { action as createPost } from "./Routes/NewPost";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PostsList />,
        children: [
          { path: "/create-post", element: <NewPost />, action: createPost },
        ],
        loader: postsLoader,
      },
      { path: "/:id", element: <PostDetails />, loader: postDetailsLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="layout">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
