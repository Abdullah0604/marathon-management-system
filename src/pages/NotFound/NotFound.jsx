// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-gray-700 px-4">
      <div className="px-2 md:px-8 lg:px-16 rounded-xl py-10  dark:bg-slate-100">
        <img
          src="/error.png"
          alt="404 Not Found"
          className="max-w-sm w-full mb-6 rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-2 ">404 - Page Not Found</h1>
        <p className="mb-6 text-center ">
          Sorry, the page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
