import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCoins,
  faMoneyBill,
  faArrowsSpin,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Adbar = () => {
  return (
    <div>
      <div className="py-4 bg-red-400 flex justify-around">
        <div className="flex text-white items-center">
          <FontAwesomeIcon icon={faBox} />
          <h5 className="pl-3">Free Gift Wrapping</h5>
        </div>
        <div className="flex text-white items-center">
          <FontAwesomeIcon icon={faCoins} />
          <h5 className="pl-3">Easy & Free Return</h5>
        </div>
        <div className="flex text-white items-center">
          <FontAwesomeIcon icon={faMoneyBill} />
          <h5 className="pl-3">Money Back Guarantee</h5>
        </div>
        <div className="flex text-white items-center">
          <FontAwesomeIcon icon={faArrowsSpin} />
          <h5 className="pl-3">Recycle Products</h5>
        </div>
      </div>
    </div>
  );
};

export default Adbar;
