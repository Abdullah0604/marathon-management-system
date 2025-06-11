import React from "react";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="max-w-[1450px] mx-auto">
      <div>
        <h2>Navbar</h2>
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
