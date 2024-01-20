import "./Brand.css";

import { Card, Row } from "react-bootstrap";

import React, { Component } from "react";
import Slider from "react-slick";
import Title from "../Title/Title";
import useFetch from "./../../hooks/useFeatch";
import { useTranslation } from 'react-i18next';
const Brand = () => {
  const { t, i18n } = useTranslation();
  const { data: brands } = useFetch("/api/v1/brands");
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear"
  };
  return (
    <section className="brand mb-md-5">
        <Row className="mb-3 mp-right ">
          <Title
            title={t('brands')}
            pragraph={t('brand_p')}  
          />
        </Row>
        <Row className="mb-5 pb-md-4 mb-md-5">

        <Slider {...settings} className="brand_slider">
        {brands &&
            brands.map((brand) => (
              <div className="brand_card pb-2 mb-2">
                  <img
                    src={`https://dashboard.rsdyemen.com//${brand.brand}`}
                    alt={brand.title_en}
                  />
                </div>
            ))}
        </Slider>
        </Row>
    </section>
  );
};

export default Brand;
