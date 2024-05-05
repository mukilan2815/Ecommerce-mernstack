import React from "react";

const Singleproduct = (props) => {
  const { name, price, image } = props;

  return (
    <div className="p-2 mx-4 my-2 rounded-lg">
      <div className="bg-white rounded-lg p-2 flex flex-col justify-center items-center">
        <img
          src={image}
          alt={name}
          className=" object-contain shadow-sm shadow-black mb-2"
          style={{ width: "200px", height: "200px" }}
        />
        <h2 className="text-lg font-bold mb-1">{name}</h2>
        <p className="text-gray-600">₹{price}</p>
      </div>
    </div>
  );
};

export default Singleproduct;
