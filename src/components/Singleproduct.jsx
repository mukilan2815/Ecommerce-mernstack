import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Singleproduct = () => {
  const [productData, setProductData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/singleproduct/${id}`)
      .then((response) => {
        setProductData(response.data);
        console.log("response.data", response.data);
      })
      .catch((error) => console.log("error", error));
  }, [id]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg">
        <img
          src={productData.imageUrl}
          alt={productData.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{productData.name}</h2>
          <p className="text-gray-600">₹{productData.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
