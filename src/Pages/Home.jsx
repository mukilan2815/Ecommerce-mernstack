import React from "react";
import { Carousel } from "react-bootstrap";
import laptop from "../Images/laptop.jpg";
import womens from "../Images/appliances.jpg";
import mobile from "../Images/phone.webp";
import chip from "../Images/chip.jpg";
import wintersale from "../Images/banner_winter.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={wintersale} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={womens} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={mobile} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={laptop} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={chip} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div>
        <h1>Categories</h1>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
