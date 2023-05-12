import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { toast } from "react-hot-toast";

const NavBar = (props) => {
  let isUserLoggedIn = props.isUserLoggedIn;
  let setIsUserLoggedIn = props.setIsUserLoggedIn;
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="text-white flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        {!isUserLoggedIn && (
          <Link to="/login">
            <button className="bg-[#3a3a3acc] text-white py-[8px] px-[12px] rounded-[8px] border border-[#6969699f]">Login</button>
          </Link>
        )}
        {!isUserLoggedIn && (
          <Link to="/signup">
            <button className="bg-[#3a3a3acc] text-white py-[8px] px-[12px] rounded-[8px] border border-[#6969699f]">Signup</button>
          </Link>
        )}
        {isUserLoggedIn && (
          <Link to="/">
            <button className="bg-[#3a3a3acc] text-white py-[8px] px-[12px] rounded-[8px] border border-[#6969699f]"
              onClick={() => {
                setIsUserLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isUserLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-[#3a3a3acc] text-white py-[8px] px-[12px] rounded-[8px] border border-[#6969699f]">Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
