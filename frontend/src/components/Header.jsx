import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <header className="flex items-center justify-between p-4 bg-blue-500">
      <h1 className="text-white">App</h1>
      <button
        className="block sm:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <nav
        className={`fixed sm:static top-0 left-0 bg-blue-500 h-full sm:h-auto sm:flex items-center transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 p-4">
          <li>Dashboard</li>
          <li>Note</li>
          <li>Meeting</li>
          <li>Bin</li>
        </ul>
        <button
          className="text-white"
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Header;
