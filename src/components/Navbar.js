import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full h-[60px] flex ">
      <div className=" w-full h-full p-[20px] flex items-center">Logo</div>
      <div className=" w-full h-full flex gap-[10px] items-center justify-end px-[20px] ">
        <div className=" w=[70px] h-[35px] flex justify-center items-center py-[3px]">
          Home
        </div>
        <NavLink
          to="/transactions"
          className=" w=[70px] h-[35px] flex justify-center items-center py-[3px] "
        >
          Transaction
        </NavLink>
        <NavLink
          to="/users"
          className=" w=[70px] h-[35px] flex justify-center items-center py-[3px] "
        >
          Users
        </NavLink>

        <NavLink
          to="/login"
          className=" w=[70px] h-[35px] flex justify-center items-center py-[3px] "
        >
          Login
        </NavLink>
        <div className=" w=[70px] h-[35px] flex justify-center items-center py-[3px] ">
          {" "}
          <NavLink
            className="block w-full text-sm text-black border-gray-300 hover:bg-red-800"
            to="/register"
          >
            Register
          </NavLink>
        </div>
        <div className=" w=[70px] h-[35px] flex justify-center items-center py-[3px] ">
          {" "}
          <NavLink
            className="block w-full text-sm text-black border-gray-300 hover:bg-red-800"
            to="/profile"
          >
            Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
