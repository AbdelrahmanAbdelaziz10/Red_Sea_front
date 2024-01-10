import "./header.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { CiLocationArrow1 } from "react-icons/ci";
import { Container } from "react-bootstrap";
import { NavBar } from "../NavBar/NavBar";
import useFetch from "./../../hooks/useFeatch";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Header = ({ toggleDirection }) => {
  const { data: setting } = useFetch(`/api/v1/website/setting`);
  const { t, i18n } = useTranslation();
  const { data: slider } = useFetch(`/api/v1/sliders`);
  const [autoPlay, setAutoPlay] = useState(0);
  const [ref, inView] = useInView();

  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const sliderRef = useRef(null);

  const playVedio = () => {
    setPlay(!play);
  };

  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(setting && setting[0]?.video);

  useEffect(() => {
    if (inView) {
      setAutoPlay(1);
    } else {
      setAutoPlay(0);
    }
  }, [inView]);

  return (
    <header className="header ">
      <NavBar />
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        onSwiper={(it) => (sliderRef.current = it)}
        className="mySwiper"
      >
        {slider &&
          slider.map((slide) => {
            return (
              <SwiperSlide className="slide">
                <img
                  src={`https://beautyproducts.website/${slide.slider}`}
                  alt=""
                />
                <div className="header_hover" />
                <div className="head_text">
                  <div className="slider_arrow">
                    <CiLocationArrow1
                      className=" arrow_r"
                      onClick={() => {
                        console.log(sliderRef.current);
                        sliderRef.current?.slideNext();
                      }}
                    />
                    <CiLocationArrow1
                      className="arrow_l"
                      onClick={() => sliderRef.current?.slidePrev()}
                    />
                  </div>
                  <h1>{t("hometitle")}</h1>
                  <h2>{t("homeTitle_p")}</h2>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      {setting.video !== " " ? (
        <Container className="d-flex justify-content-center">
          <div
            className="video video-container d-flex justify-content-center"
            ref={ref}
          >
            {/* <div className="play_video " onClick={() => playVedio()}>
            {!play && <FaRegCirclePlay />}
          </div> */}
            <iframe
              ref={videoRef}
              title="youtube video"
              className="videoIframe js-videoIframe"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay}`}
              frameborder="0"
              allowTransparency="true"
              allowfullscreen
              allow="autoplay"
            ></iframe>
          </div>
        </Container>
      ) : null}
    </header>
  );
};

export default Header;