import React from "react";
import bag from "../Images/500x500bag.jpg";
import bed from "../Images/500x500bed.jpg";
import laptop from "../Images/500x500laptop.jpg";
import mens from "../Images/500x500mens.webp";
import womens from "../Images/500x500womens.webp";
const Categories = () => {
  const categories = [
    {
      image: bag,
      title: "Bags",
      onclick: "Bags",
    },
    {
      image: bed,
      title: "Beds",
      onclick: "Beds",
    },
    {
      image: laptop,
      title: "Laptops",
      onclick: "Laptops",
    },
    {
      image: mens,
      title: "Mens",
      onclick: "Mens",
    },
    {
      image: womens,
      title: "Womens",
      onclick: "Womens",
    },
  ];
  return (
    <div>
      <div className="flex justify-center">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              console.log(category.onclick);
            }}
            className="m-4"
          >
            <img src={category.image} alt={category.title} />
            <h1 className="font-bold text-xl">{category.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
