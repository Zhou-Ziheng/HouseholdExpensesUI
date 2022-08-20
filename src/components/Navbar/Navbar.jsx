import React from 'react'
import logo from "../../image/logo1.svg"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <a className="nav-logo" href="/">
        <img src={logo} alt="logo" height="300" width="180" />
      </a>
      <div className="nav-items">
        <a className="font-bold" href="/signup">Sign Up</a>
        <a className="font-bold bg-[#4066E0] py-4 px-6 rounded opacity-100" href="/signin">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
