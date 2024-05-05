import React, { useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { UserContext } from "../Usercontext";

const Shopping = () => {
  const { searchquery } = useContext(UserContext);
  const response = axios.get(
    `http://localhost:3001/api/products/${searchquery}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4">Filter</h1>
          <div className="mb-4">
            <p className="font-bold">Price</p>
            <div className="flex items-center">
              <label className="mr-2">Min price</label>
              <input
                className="border border-gray-300 px-2 py-1 rounded"
                type="number"
              />
            </div>
            <div className="flex items-center mt-2">
              <label className="mr-2">Max price</label>
              <input
                className="border border-gray-300 px-2 py-1 rounded"
                type="number"
              />
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold">Stars</p>
            <div className="flex">
              <button className="m-2 hover:bg-gray-100 p-2 rounded-md">
                1⭐
              </button>
              <button className="m-2 hover:bg-gray-100 p-2 rounded-md">
                2⭐
              </button>
              <button className="m-2 hover:bg-gray-100 p-2 rounded-md">
                3⭐
              </button>
              <button className="m-2 hover:bg-gray-100 p-2 rounded-md">
                4⭐
              </button>
              <button className="m-2 hover:bg-gray-100 p-2 rounded-md">
                5⭐
              </button>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold">Brands</p>
            <select className="border border-gray-300 px-2 py-1 rounded w-full">
              <option value="">Brand 1</option>
              <option value="">Brand 2</option>
              <option value="">Brand 3</option>
            </select>
          </div>
          <div className="mb-4">
            <p className="font-bold">Delivery</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
              Get it by Today
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              As Usual Delivery
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Shopping;
