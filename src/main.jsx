import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from "./App";
import PostDetails from "./components/PostDetails";
import RootLayout from "./Routes/RootLayput";
import "./main.css";

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {path: '/', element: <App />},
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
