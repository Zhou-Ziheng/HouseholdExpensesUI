import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { login } from "../../APIs/LoginAPI";
import Cookies from "universal-cookie";
function Signin({ loggedin, setLogin }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const cookies = new Cookies();

  const submit = async () => {
    console.log("here");
    await login(email, password);

    if (cookies.get("userid")) {
      setLogin(true);
    }
  };

  useEffect(() => {
    if (loggedin) {
      navigate("../dashboard", { replace: true });
    }
  });

  return (
    <>
      <div className="h-[800px] bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center font-extrabold text-4xl py-2">
            {" "}
            Log In To Your Account{" "}
          </div>
          <div className="text-l font-medium text-gray-900 mt-2 text-center">
            {" "}
            Don't have an account yet?{" "}
            <a className="text-[#8b74bd]" href="/signup">
              Sign Up
            </a>
          </div>
        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form
            action=""
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <div>
              <label
                htmlFor=""
                className="text-sm text-left font-bold text-gray-600 block"
              >
                Email
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm text-left font-bold text-gray-600 block"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 focus:ring-[#8b74bd] dark:focus:ring-[#8b74bd] dark:ring-offset-gray-800 focus:ring-2"
                ></input>
                <label htmlFor="" className="ml-2 text-sm text-gray-600">
                  Remember Me
                </label>
              </div>
              <div>
                <a href="/help" className="font-medium text-sm text-[#8b74bd]">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button className="w-full py-2 px-4 bg-[#8b74bd] hover:bg-[#7953ab] rounded-md text-white text-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
