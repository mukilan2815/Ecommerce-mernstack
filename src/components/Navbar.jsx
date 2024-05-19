import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeadphonesAlt,
  faSearch,
  faArrowRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../index.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState(false);
  React.useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setLogin(true);
    }
  }, []);

  const fetchUsername = async (userId) => {
    const response = await axios.get(
      `http://localhost:3001/api/user/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("Token")}`,
        },
      }
    );
    return response.data.firstName;
  };

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("UserId");
      if (userId) {
        try {
          const username = await fetchUsername(userId);
          setUsername(username);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching username:", error);
          setLoading(false);
        }
      }
    };
    fetchUserData();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/products/${searchQuery}`);
    }
    navigate(`/products/${searchQuery}`);
  };

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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />

          <button
            className="absolute right-2 bg-slate-300 px-2 py-1 rounded-md top-1/2 transform -translate-y-1/2"
            onClick={handleSearch}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <Link to="/products" className="no-underline text-black">
          Shop
        </Link>
        <FontAwesomeIcon icon={faCartShopping} />

        <FontAwesomeIcon icon={faHeadphonesAlt} />
        <Link to="/user" className="text-black">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        {loading ? <></> : <span>Welcome, {username} !</span>}
        {!login && (
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
