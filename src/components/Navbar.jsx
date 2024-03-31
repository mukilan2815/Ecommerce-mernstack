import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeadphonesAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="flex items-center justify-around my-2">
      <h1 className="text-black font-bold text-2xl">Ecommerce</h1>
      <ul className=" space-x-20 flex">
        <li>Home</li>
        <li>Shop</li>
        <FontAwesomeIcon icon={faCartShopping} />
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faHeadphonesAlt} />
      </ul>
    </div>
  );
};

export default Navbar;
