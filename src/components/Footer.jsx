import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-200 p-5">
      <div className="flex ">
        <div className="flex-col items-center mr-10">
          <h5>Start Exploring our high quality products</h5>
          <button className="bg-red-500 hover:text-black border-2 transition-all text-white hover:bg-transparent hover:border-2 border-red-500 text-xl font-bold p-2 rounded">
            Shop Now
          </button>
        </div>
        <div className="mr-10">
          <h5>Customer Service</h5>
          <p>Privacy policy</p>
          <p>Terms and Conditions</p>
          <p>Shipping and Returns</p>
          <p>Help & FAQs</p>
          <p>Refund Policy</p>
          <p>Customer Service</p>
        </div>
        <div className="mr-10">
          <h6>Contact Us</h6>
          <p>Podanur coimbatore</p>
          <p>
            <b>Phone:</b> 7448359935
          </p>
          <p>
            <b>Email:</b> mukilan2808@gmail.com
          </p>
          <p>
            <b>STAY CONNECTED.</b>
          </p>
        </div>
        <div>
          <h6>NEWSLETTER</h6>
          <p>
            Enter your email to receive daily news and get 20% off coupon for
            all items. NO spam, we promise
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className="border-2 p-2 outline-none"
          />
          <button className="bg-red-500 text-white p-2">Subscribe</button>
        </div>
      </div>
      <hr />
      <p>© 2024 Disco Mart Inc. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
