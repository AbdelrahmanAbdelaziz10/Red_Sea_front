import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sliders.css";

import React from "react";
import CardComponent from "../Common Component/Card/Card";
import Slider from "react-slick";
import useFetch from './../../hooks/useFeatch';
const Sliders = ({selectedLanguage}) => {
  const {data:slider,loading}=useFetch(`/api/v1/products`)

  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 4,
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
      <Slider {...sliderSettings} className="overflow_visible ">
        {slider&&slider.map((slide) => (
          <CardComponent
          slide={slide}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
