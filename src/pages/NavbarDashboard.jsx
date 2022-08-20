import React from 'react'
import logo from "../image/logo1.svg"

export default function NavbarDashboard() {
  return (
    <div className="Navbar">
      <a className="nav-logo" href="/">
        <img src={logo} alt="logo" height="300" width="180"/>
      </a>
      <div className="nav-items">
          <a href="/Dashboard">
              Dashboard
          </a>
          <a href="#">
              Log Out
          </a>
      </div>
    </div>
  );
};