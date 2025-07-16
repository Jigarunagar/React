import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MyReactApp
        </Link>
        <nav className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Signup
          </NavLink>
          <NavLink
            to="/forgot"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            ForgotPassword
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
