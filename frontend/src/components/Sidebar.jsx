import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="hidden sm:block w-64 bg-gray-800 h-screen p-4">
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard" className="text-white">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/note" className="text-white">
              Note
            </NavLink>
          </li>
          <li>
            <NavLink to="/meeting" className="text-white">
              Meeting
            </NavLink>
          </li>
          <li>
            <NavLink to="/bin" className="text-white">
              Bin
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
