import About from "../../Components/About/About";
import Brand from "../../Components/Brand/Brand";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LocationMap from "../../Components/MapLocation/LocationMap";
import Products from "../../Components/Products/Products";
import React from "react";

const HomePage = () => {
  return (
    <div className="Home">
      <Header />
      <About />
      <div className="homepage_product ">
        <Products title='منتجاتنا'/>
      </div>
      <Brand />
      <LocationMap title="موقعنا علي الخرائط" />
      <div className="triangle_control">
        <div className="triangle" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
