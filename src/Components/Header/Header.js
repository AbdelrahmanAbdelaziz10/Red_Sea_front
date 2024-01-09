import "./header.css";
import "swiper/css";
import "swiper/css/pagination";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container } from "react-bootstrap";
import { FaRegCirclePlay } from "react-icons/fa6";
import { NavBar } from "../NavBar/NavBar";
import { Pagination } from "swiper/modules";
import poster from "../../images/company 12.jpg";
import useFetch from "./../../hooks/useFeatch";
import { useTranslation } from "react-i18next";

const Header = ({ toggleDirection }) => {
  const { data: setting } = useFetch(`/api/v1/website/setting`);
  const { t, i18n } = useTranslation();
  const { data: slider } = useFetch(`/api/v1/sliders`);

  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

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
  const autoPlay = !play ? 0 : 1;

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
                  <h5>{t("hometitle")}</h5>
                  <p>{t("homeTitle_p")}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Container className="d-flex justify-content-center">
        <div className="video video-container d-flex justify-content-center">
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
    </header>
  );
};

export default Header;