import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import getMemberData from "../../APIs/getMemberData";
import logo from "../../image/logo1.svg";
import "./Navbar.css";

const Navbar = ({ loggedin, setLogin }) => {
  const cookies = new Cookies();

  const [hasFamily, setHasFamily] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const data = await getMemberData(cookies.get("userid"));
      const parsed = await data.json();
      if (parsed.familyId === "") {
        setHasFamily(false);
      } else {
        setHasFamily(true);
      }
    };
    if (cookies.get("userid") != null) {
      fetch();
    }
  }, [cookies, loggedin]);

  console.log(hasFamily);
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
            {hasFamily && <a href="/Dashboard">Dashboard</a>}
            {!hasFamily && <a href="/createFamily">Create Family</a>}
            <a href="/PsDash">Personal Dashboard</a>
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
