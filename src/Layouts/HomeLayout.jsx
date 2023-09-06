import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../templates/Nav/Nav";

export default function HomeLayout() {
  return (
    <main>
      <div className="content-container">
        <Nav />
        <Outlet />
      </div>
    </main>
  );
}
