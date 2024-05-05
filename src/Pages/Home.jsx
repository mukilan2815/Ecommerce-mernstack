import React from "react";
import { Carousel } from "react-bootstrap";
import laptop from "../Images/laptop.jpg";
import womens from "../Images/appliances.jpg";
import mobile from "../Images/phone.webp";
import chip from "../Images/chip.jpg";
import wintersale from "../Images/banner_winter.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Adbar from "../components/Adbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel interval={1500}>
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
          <img className="d-block w-100" src={laptop} alt="fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={chip} alt="fifth slide" />
        </Carousel.Item>
      </Carousel>
      <div>
        <h1 className="font-bold text-2xl flex justify-center my-10">
          Top Categories
        </h1>
        <Categories />
      </div>
      <div>
        <Adbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
