import React, { useRef, useState } from "react";
import "./header.css";
import { Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { NavBar } from "../NavBar/NavBar";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const Header = () => {
  return (
    <header className="header ">
              <NavBar />

      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slide_1">
          <div className="header_text">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_text">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_text">
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="header_text">
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Header;
