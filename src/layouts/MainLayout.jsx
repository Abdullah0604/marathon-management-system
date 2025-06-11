import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <div className="max-w-[1480px] mx-auto px-2  min-[500px]:px-6 xl:px-0">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <h2>Footer</h2>
      </div>
    </div>
  );
}

export default MainLayout;
