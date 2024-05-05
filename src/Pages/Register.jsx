import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { UserContext } from "../Usercontext";

const Register = () => {
  const navigate = useNavigate();
  const { setUserId } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData) {
      try {
        const response = await axios.post(
          "https://backend-mern-hbxj.onrender.com/api/register",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        const token = response.data.token;
        console.log(token);
        setUserId(response.data.userId);
        localStorage.setItem("Token", token);
        localStorage.setItem("UserId", response.data.userId);
        navigate("/");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="flex">
        <div className="w-1/2 pr-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">City:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
          </form>
        </div>
        <div className="w-1/2 pl-4">
          <div className="mb-4">
            <label className="block mb-2">State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Zip:</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-1 w-full"
            />
          </div>
          <Link>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
