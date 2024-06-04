import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full h-[60px] flex ">
      <div className=" w-full h-full p-[20px] flex items-center">Logo</div>
      <div className=" w-full h-full flex gap-[10px] items-center justify-end px-[20px] ">
        <div className=" w=[70px] h-[35px] flex justify-center items-center rounded-md  py-[3px] hover:bg-gray-200 ">
          Home
        </div>
        <NavLink
          to="/transactions"
          className=" w=[70px] h-[35px] flex justify-center items-center rounded-md py-[3px] hover:bg-gray-200"
        >
          Transaction
        </NavLink>
        <NavLink
          to="/users"
          className=" w=[70px] h-[35px] flex justify-center items-center rounded-md py-[3px] hover:bg-gray-200 "
        >
          Users
        </NavLink>

        <NavLink
          to="/login"
          className=" w=[70px] h-[35px] flex justify-center items-center rounded-md py-[3px] hover:bg-gray-200 "
        >
          Login
        </NavLink>
        <div className=" w=[70px] h-[35px] flex justify-center items-center  py-[3px] rounded-md hover:bg-gray-200">
          {" "}
          <NavLink to="/register">Register</NavLink>
        </div>
        <div className=" w=[70px] h-[35px] flex justify-center items-center  py-[3px] rounded-md hover:bg-gray-200 ">
          {" "}
          <NavLink to="/profile">Profile</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
