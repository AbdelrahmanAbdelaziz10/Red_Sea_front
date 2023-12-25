import React from "react";
import { NavBar } from "../NavBar/NavBar";
import './Head.css';
import { IoIosArrowBack } from "react-icons/io";


const Head = ({title,poster}) => {
  return (
    <header className="head ">
    <NavBar />
    <div className="content d-flex justify-content-center">
    <div className="head_img mb-5">
      <div className="header_hover" />
        <img src={poster} alt="" />
      </div>
      <div className="head_text d-flex justify-content-center">
        <p>الرئيسية <IoIosArrowBack /> {title}</p>
      </div>
    </div>


    </header>
  );
};

export default Head;
