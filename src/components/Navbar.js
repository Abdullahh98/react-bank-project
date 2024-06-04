import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-white text-black">
        <div className="container mx-auto flex justify-between items-center h-16 px-4">
          <div className="text-xl font-semibold">Bank Name</div>
          <div className="flex items-center justify-center space-x-4 flex-1">
            <NavLink
              to="/home"
              className="py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="/transactions"
              className="py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
            >
              Transactions
            </NavLink>
            <NavLink
              to="/login"
              className="py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
            >
              Register
            </NavLink>
            <NavLink
              to="/profile"
              className="py-2 px-4 rounded-md hover:bg-green-500 transition duration-300"
            >
              Profile
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div className="flex justify-start items-start p-4">Logo</div>
<div className="flex justify-center h-16 bg-white text-stone-700">
  <div className="flex items-center space-x-4 px-4">
    <NavLink
      to="/home"
      className="py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
      activeClassName="bg-gray-700"
    >
      Home
    </NavLink>
    <NavLink
      to="/transactions"
      className="py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
      activeClassName="bg-gray-700"
    >
      Transactions
    </NavLink>
    <div className="py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300">
      Users
    </div>
    <NavLink
      to="/login"
      className="py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
      activeClassName="bg-gray-700"
    >
      Login
    </NavLink>
    <NavLink
      to="/register"
      className="py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
      activeClassName="bg-gray-700"
    >
      Register
    </NavLink>
    <NavLink
      to="/profile"
      className="py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
      activeClassName="bg-gray-700"
    >
      Profile
    </NavLink>
  </div>
</div>
 */
}
