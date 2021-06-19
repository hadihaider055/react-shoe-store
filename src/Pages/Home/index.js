import React from "react";
import Navbar from "../../Components/Navbar";
import Products from "../../Components/Products";
import BannerImage from "../../Images/Banner2.jpg";
import Footer from "../../Components/Footer";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <img
        src={BannerImage}
        alt="Banner"
        className="home__page__banner"
        title="Banner"
        style={{ width: "100%", height: "500px" }}
      />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
