import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loader/Loading";
import { ToastContainer } from "react-toastify";

function MainLayout() {
  const { loading } = useAuth();

  if (loading) return <Loading />;
  return (
    <div className="max-w-[1400px] mx-auto px-2  min-[500px]:px-6 xl:px-0">
      <ToastContainer />
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
