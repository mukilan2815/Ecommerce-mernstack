import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeadphonesAlt,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import { UserContext } from "../Usercontext";
const Navbar = () => {
  const [login, setLogin] = React.useState(false);
  React.useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setLogin(true);
    }
  }, []);

  return (
    <div className="flex items-center nav justify-around py-2">
      <Link to={"/"} className="text-black no-underline font-bold text-2xl">
        DiscoMart
      </Link>
      <ul className=" space-x-20 mt-2 flex items-center">
        <div className="relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search.."
            
            className="border outline-none rounded-lg px-10 py-2  pr-10"
          />
        </div>
        <Link to="/shop" className="no-underline text-black">
          Shop
        </Link>
        <FontAwesomeIcon icon={faCartShopping} />
        <Link to="/user" className="text-black">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <FontAwesomeIcon icon={faHeadphonesAlt} />
        {login ? null : (
          <Link
            to="/login"
            className="bg-blue-500 px-4 text-white no-underline rounded-md py-2 "
          >
            Login
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
