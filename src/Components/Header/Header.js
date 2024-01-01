import "./header.css";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Container,  } from "react-bootstrap";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaRegCirclePlay } from "react-icons/fa6";
import { NavBar } from "../NavBar/NavBar";
import poster from "../../images/company 12.jpg";
// import poster1 from "../../images/company 10.jpg";
// import poster2 from "../../images/company 1.jpg";
// import poster3 from "../../images/company 3.jpg";
// import poster4 from "../../images/company2.jpg";
import vedio from "../../images/video.mp4";
import useFetch from './../../hooks/useFeatch';

const Header = () => {
  const {data:slider}= useFetch(`/api/v1/sliders`);

  const [play, setPlay] = useState(true);
  const videoRef = useRef(null);

  const playVedio = () => {
    const video = videoRef.current;
    if (play) {
      video.play();
    } else {
      video.pause();
    }
    setPlay(!play);
  };

  const {data:vedio}=useFetch(`/api/v1/website/setting`);


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
      {slider&&
        slider.map((slide)=>{
          return(
        <SwiperSlide className="slide">
        <img
                src={`https://beautyproducts.website/${slide.slider}`}
                alt=""
              />
          <div className="header_hover" />
          <div className="head_text">
            <h5>تبرز شركة البحر الاحمر للمنظفات كشركة عملاقة</h5>
            <p>في مجال تصنيع مساحيق التنظيف</p>
          </div>
        </SwiperSlide>
          )
        })
      }

        {/* <SwiperSlide className="slide">
          <img src={poster2} alt="" />
          <div className="header_hover" />
          <div className="head_text">
            <h5>تبرز شركة البحر الاحمر للمنظفات كشركة عملاقة</h5>
            <p>في مجال تصنيع مساحيق التنظيف</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={poster3} alt="" />
          <div className="header_hover" />
          <div className="head_text">
            <h5>تبرز شركة البحر الاحمر للمنظفات كشركة عملاقة</h5>
            <p>في مجال تصنيع مساحيق التنظيف</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src={poster4} alt="" />
          <div className="header_hover" />
          <div className="head_text">
            <h5>تبرز شركة البحر الاحمر للمنظفات كشركة عملاقة</h5>
            <p>في مجال تصنيع مساحيق التنظيف</p>
          </div>
        </SwiperSlide>*/}
      </Swiper> 
      <Container className="d-flex justify-content-center">
        <div className="video d-flex justify-content-center">
          <div className="play_video " onClick={() => playVedio()}>
            {play && <FaRegCirclePlay />}
          </div>
          <video
            ref={videoRef}
            poster={poster}
            style={{ borderRadius: "6px" }}
            controls={play ? false : true}
          >
            <source src={vedio&&vedio[0]?.video} />
            Your Browser Not Support This Video tray in another Browser
          </video>
        </div>
      </Container>
    </header>
  );
};

export default Header;