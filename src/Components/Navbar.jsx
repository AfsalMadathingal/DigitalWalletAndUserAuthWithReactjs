import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-200 backdrop-blur-2xl bg-opacity-10 text-white">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52 backdrop-blur-3xl bg-opacity-80 text-white"
            >
              <li className="text-xl cursor-pointer px-16 py-5  hover:text-blue-500 transition-colors duration-300 ">Home</li>
              <li className="text-xl cursor-pointer px-16 py-5  hover:text-blue-500 transition-colors duration-300 ">About</li>
              <li className="text-xl cursor-pointer px-16 py-5  hover:text-blue-500 transition-colors duration-300 ">Contact</li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DigiWallet</a>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="gap-36 menu menu-horizontal px-1 ">
            <li className="text-xl cursor-pointer hover:text-blue-500 transition-colors duration-300 ">
              Home
            </li>
            <li className="text-xl cursor-pointer  hover:text-blue-500 transition-colors duration-300">About</li>
            <li className="text-xl cursor-pointer  hover:text-blue-500 transition-colors duration-300">Contact</li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="cursor-pointer  w-16 h-10 btn-grad">SignUp</Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;
