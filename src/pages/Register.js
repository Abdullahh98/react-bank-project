import React, { useContext, useState } from "react";
import { register } from "../api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const registerRequest = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/");
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    registerRequest.mutate();
  };

  return (
    <div className="min-h-screen flex items-center  justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-white  rounded-md">
        <h2 className="text-3xl text-black font-semibold mb-6">
          Register your account
        </h2>
        <p className="text-gray-600 mb-4">
          If you do have an account,{" "}
          <NavLink to="/login" className="text-blue-500">
            login here
          </NavLink>
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-black text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-black text-sm font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-black text-sm font-medium mb-2"
            >
              Upload a Profile Picture
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="block w-full text-sm text-slate-500 border-gray-300
              file:mr-4 file:py-2 file:px-4 
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-green-500 file:text-black
              hover:file:bg-green-600 border rounded-md 
        "
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
