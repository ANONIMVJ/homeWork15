import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation(); 

  return (
    <div className="bg-white max-w-[220px] w-full overflow-y-auto border-r border-teal-300 h-[100vh] sticky top-0 shadow-md text-teal-500">
      <div className="h-[60px] flex items-center justify-center p-4">
        <img className="w-[160px]" src="/logoipsum.svg" alt="Logo Ipsum" />
      </div>

      <span className="text-sm font-bold text-teal-500 border-b ml-2 pb-2 block mb-4">Pages</span>

      <div className="px-3 w-full flex flex-col gap-3">
        <Link
          to={"/"}
          className={`border p-2 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out
            ${location.pathname === "/dashboard" ? "bg-teal-500 text-white" : "bg-transparent text-teal-500"}`}
        >
          Home
        </Link>
        <Link
          to={"/users"}
          className={`border p-2 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out
            ${location.pathname === "/dashboard/users" ? "bg-teal-500 text-white" : "bg-transparent text-teal-500"}`}
        >
          Users
        </Link>
        <Link
          to={"/products"}
          className={`border p-2 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out
            ${location.pathname === "/dashboard/products" ? "bg-teal-500 text-white" : "bg-transparent text-teal-500"}`}
        >
          Products
        </Link>
        <Link
          to={"/counter"}
          className={`border p-2 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300 ease-in-out
            ${location.pathname === "/dashboard/counter" ? "bg-teal-500 text-white" : "bg-transparent text-teal-500"}`}
        >
          Counter
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
