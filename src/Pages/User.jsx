import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
const User = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("Token");
      const userId = localStorage.getItem("UserId");
      const response = await axios.get(
        `http://localhost:3001/api/user/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Navbar />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Welcome back,{" "}
                {data ? `${data.firstName} ${data.lastName}` : "Loading..."}
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>Email: {data ? data.email : "Loading..."}</p>
                <p>Address: {data ? data.address : "Loading..."}</p>
                <p>City: {data ? data.city : "Loading..."}</p>
                <p>State: {data ? data.state : "Loading..."}</p>
                <p>Zip: {data ? data.zip : "Loading..."}</p>
                <p>Phone: {data ? data.phone : "Loading..."}</p>
                <p>Country: {data ? data.country : "Loading..."}</p>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>
                  <a
                    href="/orders"
                    className="text-cyan-600 hover:text-cyan-700"
                  >
                    {" "}
                    View your orders &rarr;{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
