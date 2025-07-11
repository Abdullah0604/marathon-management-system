import { useEffect, useState } from "react";
import { FaAngleDown, FaBars, FaBell } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router";
import { CiLogout } from "react-icons/ci";

import { IoMoon, IoSunny } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Logo from "../Logo/Logo";
import useAuth from "../../hooks/useAuth";

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { user, userLogOut } = useAuth();
  // const user = {
  //   displayName: "Mohammed Abdullah",
  //   photoURL: "https://i.ibb.co/p6FBLFS6/IMG-20210711-115302.jpg",
  // };
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };
  const navigate = useNavigate();
  const links = (
    <>
      <li onClick={handleCloseMenu} className="font-medium ">
        <NavLink to="/" className="px-3  py-2">
          Home
        </NavLink>
      </li>
      <li onClick={handleCloseMenu} className="font-medium ">
        <NavLink to="/about" className="px-3  py-2">
          About US
        </NavLink>
      </li>
      <li onClick={handleCloseMenu} className="font-medium ">
        <NavLink to="/marathons" className="px-3 py-2">
          Marathons
        </NavLink>
      </li>
      <li onClick={handleCloseMenu} className="font-medium ">
        <NavLink to="/contact" className="px-3 py-2">
          Contact US
        </NavLink>
      </li>
      {user && (
        <li onClick={handleCloseMenu} className="font-medium ">
          <NavLink to="/dashboard" className="px-3 py-2">
            Dashboard
          </NavLink>
        </li>
      )}
      {!user && (
        <>
          <li onClick={handleCloseMenu}>
            <NavLink
              to="/register"
              className="px-3 py-2 lg:py-0 font-medium lg:border-2 lg:border-orange-400 lg:rounded-md "
            >
              Register
            </NavLink>
          </li>
          <li className="login" onClick={handleCloseMenu}>
            <NavLink
              to="/login"
              className="px-3  py-2 font-medium lg:px-6 lg:py-2 lg:rounded-lg  lg:text-slate-100 lg:bg-orange-400  "
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  //theme control starts
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  //theme control end

  const handleLogOut = () => {
    userLogOut();
    navigate("/");
  };

  return (
    <div className="bg-white/80 dark:bg-gray-950/80 fixed top-0 z-100 w-full">
      <div className="max-w-[1400px]  mx-auto px-2  min-[500px]:px-6 xl:px-0 flex w-full justify-between items-center py-5  ">
        <div>
          <Logo />
        </div>

        {/* navbar end */}
        <div className="end-navlink flex items-center gap-3">
          {/* theme controller */}
          <div>
            <button
              onClick={toggleTheme}
              className=" p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {theme === "dark" ? (
                <span className="text-amber-400">
                  <IoSunny size={18} />
                </span>
              ) : (
                <span className="">
                  <IoMoon size={18} />
                </span>
              )}
            </button>
          </div>

          {/* for desktop and user has or not */}
          <div className="hidden lg:flex xl:items-center">
            <ul className=" flex gap-5 ">{links}</ul>
          </div>

          {user ? (
            <div className="flex items-center gap-8">
              <div
                role="button"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="flex items-center gap-2 relative cursor-pointer"
              >
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src={user && user.photoURL}
                />
                <FaAngleDown size={20} className="text-orange-500" />
                {isOpenMenu && (
                  <div className="w-48 absolute bg-base-300/90 dark:bg-slate-300/10 z-50 shadow-2xl rounded-lg top-14 right-2 pt-5  space-y-4">
                    <ul className="xl:hidden space-y-2 px-2">{links}</ul>
                    <button
                      onClick={handleLogOut}
                      className="bg-orange-400 w-full text-left shadow py-2 flex items-center  gap-2 px-6 sm:px-6 text-slate-100 rounded-b-lg"
                    >
                      logout{" "}
                      <span className="font-bold">
                        <CiLogout size={18} className="stroke-1" />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className=" flex items-center gap-x-3 md:gap-x-8 ">
              {/* for mobile and tablet */}
              <div className="relative lg:hidden  ">
                {isOpenMenu ? (
                  <button onClick={() => setIsOpenMenu(false)}>
                    <RxCross1 size={30} className="pt-2 cursor-pointer" />
                  </button>
                ) : (
                  <button onClick={() => setIsOpenMenu(true)}>
                    <FaBars size={30} className="pt-2 cursor-pointer" />
                  </button>
                )}
                {isOpenMenu && (
                  <div className="w-48 absolute bg-base-300/90 dark:bg-slate-300/10 z-50 shadow-2xl rounded-lg top-5 right-3 pt-5  space-y-4">
                    <ul className="xl:hidden w-full space-y-2 py-4">{links}</ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
