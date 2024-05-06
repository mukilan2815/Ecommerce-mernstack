import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Shopping = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const uploadData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/products`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error(error);
      }
    };
    uploadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex justify-start">
        <div className="w-1/4 p-4 bg-white rounded-lg shadow-md">
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
            <button className="bg-blue-500 m-2 text-white px-4 py-2 rounded-md mr-2">
              Get it by Today
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              As Usual Delivery
            </button>
          </div>
        </div>
        <div className="ml-5">
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center mb-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded-md"
                />
                <h2 className="text-xl font-bold mt-2">{product.name}</h2>
                <p>{product.description}</p>
                <p className="font-bold">${product.price}</p>
                <div className="flex justify-between">
                  <button className="bg-blue-500 mr-2 text-white px-3 py-2 rounded-md mt-2">
                    Add to Cart
                  </button>
                  <button className="bg-green-500 text-white px-3 py-2 rounded-md mt-2">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shopping;
