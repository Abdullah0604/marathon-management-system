import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router";
import { FaPlusCircle, FaListUl, FaClipboardCheck } from "react-icons/fa";
import { FiSidebar } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function DashboardLayout() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const location = useLocation();
  return (
    <div className="max-w-[1400px] min-h-screen flex lg:gap-x-10 relative">
      {/* Sidebar */}
      <div
        className={`bg-blue-50 dark:bg-gray-800 z-40 w-[250px] xl:my-16 xl:rounded-xl min-h-screen px-5  py-10 dashboard-links transition-transform duration-300 
        fixed top-0 left-0 ${
          isOpenSidebar ? "translate-x-0" : "-translate-x-full"
        } 
      xl:static xl:translate-x-0`}
      >
        <div>
          <button
            className=" p-1 rounded-full bg-gray-600 shadow-lg  hover:bg-slate-100 hover:text-red-500 duration-300 cursor-pointer text-slate-200 xl:hidden"
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          >
            <RxCross2 size={20} />
          </button>
        </div>

        <ul className="py-5 lg:py-0">
          <li onClick={() => setIsOpenSidebar(false)} className="py-2 mb-1">
            <NavLink
              to="/dashboard/add-marathon"
              className={({ isActive }) =>
                `flex items-center gap-2 ${
                  isActive || location.pathname === "/dashboard"
                    ? "text-orange-400/90"
                    : ""
                }`
              }
            >
              <FaPlusCircle />
              Add Marathon
            </NavLink>
          </li>
          <li onClick={() => setIsOpenSidebar(false)} className="py-2 mb-1">
            <NavLink
              to="/dashboard/my-marathon-list"
              className="flex items-center gap-2"
            >
              <FaListUl />
              My Marathon List
            </NavLink>
          </li>
          <li onClick={() => setIsOpenSidebar(false)} className="py-2 mb-1">
            <NavLink
              to="/dashboard/my-apply-list"
              className="flex items-center gap-2"
            >
              <FaClipboardCheck />
              My Apply List
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="w-full lg:py-12  ">
        <div className=" xl:hidden">
          <button
            className="cursor-pointer"
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          >
            <FiSidebar size={24} />
          </button>
        </div>

        <div className="w-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
