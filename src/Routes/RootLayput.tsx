import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import "../Global.css";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
}
