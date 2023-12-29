import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliders.css";

import React, { Component, useEffect, useState } from "react";

import CardComponent from "../Common Component/Card/Card";
import Slider from "react-slick";
import productImg1 from "../../images/منتج-توب.png";
import productImg2 from "../../images/باكت-الشروق.png";
import productImg3 from "../../images/منتج-زهرة3.png";
import productImg4 from "../../images/ابو-اللو.png";

const Sliders = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const cards = [
    {
      imageSrc: productImg1,
      title: "صابون ثوب",
    },
    {
      imageSrc: productImg2,
      title: "صابون شروق",
    },
    {
      imageSrc: productImg3,
      title: "صابون زهره",
    },
    {
      imageSrc: productImg4,
      title: "صابون ابوللو",
    },
    {
      imageSrc: productImg1,
      title: "صابون ثوب",
    },
    {
      imageSrc: productImg2,
      title: "صابون شروق",
    },
    {
      imageSrc: productImg3,
      title: "صابون زهره",
    },
    {
      imageSrc: productImg4,
      title: "صابون ابوللو",
    },
  ];

  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "25%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20%",
        },
      },
    ],
  };

  return (
    <div className="slider mb-3 ">
      {/* <button className="triangle_control ">
        <div className="triangle slick-arrow slick-prev" />
      </button> */}
      <Slider {...sliderSettings} className="overflow_visible">
        {cards.map((card, index) => (
          <CardComponent
            index={index}
            title={card.title}
            imageSrc={card.imageSrc}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
