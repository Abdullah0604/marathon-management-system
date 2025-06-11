import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout() {
  return (
    <div className="max-w-[1480px] mx-auto px-2  min-[500px]:px-6 xl:px-0">
      <div>
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-110px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
