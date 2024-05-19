import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const Shopping = (props) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  let { searchQuery } = useParams();
  searchQuery = searchQuery || "";
  useEffect(() => {
    const uploadData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/products/${searchQuery}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        setProducts(Array.isArray(response.data) ? response.data : []);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    uploadData();
  }, [searchQuery]);

  const singleproduct = (key) => {
    navigate(`/singleproduct/${key}`);
  };

  const addcart = (key) => {
    axios
      .post(`http://localhost:3001/api/addcart/${key}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
                name="minprice"
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
        {isloading ? (
          <div className="animate-spin h-10 w-8 border-3 border-blue-600 bg-transparent absolute left-2/4 top-2/4 rounded-full bg-blue-500"></div>
        ) : (
          <div className="ml-5">
            <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="flex flex-col items-center mb-4"
                >
                  <div
                    className="flex flex-col items-center cursor-pointer p-4 bg-white"
                    onClick={() => singleproduct(product._id)}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-32 h-32 object-contain rounded-md"
                    />
                    <h2 className="text-xl font-bold mt-2">{product.name}</h2>
                    <p>{product.description}</p>
                    <p className="font-bold">₹{product.price}</p>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        addcart(product._id);
                      }}
                      className="bg-blue-500 hover:bg-blue-600 mr-2 text-white px-3 py-2 rounded-md mt-2"
                    >
                      Add to Cart
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-md mt-2">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Shopping;
