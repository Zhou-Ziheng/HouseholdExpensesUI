import React from "react";
import Cookies from "universal-cookie";
import logo from "../../image/logo1.svg";
import "./Navbar.css";

const Navbar = ({ loggedin, setLogin }) => {
  const cookies = new Cookies();

  if (!loggedin) {
    return (
      <div class="Shadow">
        <div className="Navbar">
          <a className="nav-logo" href="/">
            <img src={logo} alt="logo" height="300" width="180" />
          </a>
          <div className="nav-items">
            <a className="font-bold" href="/help">
              Help
            </a>
            <a className="font-bold" href="/signup">
              Sign Up
            </a>
            <a
              className="font-bold bg-[#4066E0] py-4 px-6 rounded opacity-100"
              href="/signin"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="Shadow">
        <div className="Navbar">
          <a className="nav-logo" href="/">
            <img src={logo} alt="logo" height="300" width="180" />
          </a>
          <div className="nav-items">
            <a href="/Dashboard">Dashboard</a>
            <a href="/AddExpenses">Add Expenses</a>
            <a href="/help">Help</a>
            <a
              onClick={() => {
                cookies.remove("userid");
              }}
              href="/"
            >
              Log Out
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
