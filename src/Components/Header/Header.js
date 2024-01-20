import "./header.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { CiLocationArrow1 } from "react-icons/ci";
import { Container } from "react-bootstrap";
import { ContextLang } from "../../App";
import HeaderSlider from "./../HeaderSlider/HeaderSlider";
import { NavBar } from "../NavBar/NavBar";
import useFetch from "./../../hooks/useFeatch";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const Header = ({ toggleDirection, navshow }) => {
  const { data: setting } = useFetch("/api/v1/website/setting");
  const { t, i18n } = useTranslation();
  const { data: slider } = useFetch("/api/v1/sliders");
  const [autoPlay, setAutoPlay] = useState(0);
  const [autoPlaySlider, setAutoPlaySlider] = useState(0);
  const [ref, inView] = useInView();
  const [ref1, inView1] = useInView();
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const sliderRef = useRef(null);
  const { selectedLanguage } = useContext(ContextLang);

  const playVedio = () => {
    setPlay(!play);
  };

  const getVideoId = (url) => {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url?.match(regExp);

    return match ? match[1] : null;
  };

  const videoId = getVideoId(setting && setting[0]?.video);
  // console.log(getVideoId(slider[1]?.video_url));

  useEffect(() => {
    if (inView) {
      setAutoPlay(1);
    } else {
      setAutoPlay(0);
    }
  }, [inView]);

  useEffect(() => {
    if (inView1) {
      setAutoPlaySlider(1);
    } else {
      setAutoPlaySlider(0);
    }
  }, [inView1]);

  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current?.swiper.update();
  }, [selectedLanguage]);

  return (
    <header className="header ">
      <NavBar navshow={navshow} />

      <Swiper
        key={selectedLanguage}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        effect={"fade"}
        autoplay={{ delay: 3000 , disableOnInteraction: false }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        onSwiper={(it) => (sliderRef.current = it)}
        onSlideChange={() => {
          // Handle slide change, and manually start autoplay if needed
          swiperRef.current?.swiper.autoplay.start();
        }}
        className="mySwiper"
      >
        {slider &&
          slider.map((slide, idx) => {
            return (
              <SwiperSlide className="slide" key={slide.id}>
                {slide?.slider !== null ? (
                  <img
                    src={`https://dashboard.rsdyemen.com/${slide?.slider}`}
                    alt=""
                  />
                ) : (
                  <div className="video_slider" ref={ref1}>
                    <iframe
                      title="youtube video"
                      className="videoIframe js-videoIframe"
                      src={`https://www.youtube.com/embed/${getVideoId(
                        slide?.video_url
                      )}?autoplay=${autoPlaySlider}&loop=1&controls=0&mute=1&rel=0&playlist=${getVideoId(
                        slide?.video_url
                      )}`}
                      frameBorder="0"
                      allowTransparency="true"
                      allowfullscreen
                      allow="autoplay"
                    ></iframe>
                  </div>
                )}

                <div className="header_hover" />
                <div className="head_text">
                  <div className="slider_arrow">
                    <CiLocationArrow1
                      className=" arrow_r"
                      onClick={() => {
                        sliderRef.current?.slideNext();
                      }}
                    />
                    <CiLocationArrow1
                      className="arrow_l"
                      onClick={() => sliderRef.current?.slidePrev()}
                    />
                  </div>
                  <h4>
                    {slide && selectedLanguage === "ar"
                      ? slide.title1_ar
                      : slide.title1_en}
                  </h4>
                  <h5>
                    {slide && selectedLanguage === "ar"
                      ? slide.title2_ar
                      : slide.title2_en}
                  </h5>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      {setting.video !== " " ? (
        <div className="d-flex justify-content-center">
          <div
            className="video video-container d-flex justify-content-center"
            ref={ref}
          >
            {
              setting[0]?.video !== null ? (
                <iframe
                  ref={videoRef}
                  title="youtube video"
                  className="videoIframe js-videoIframe"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay}&loop=1`}
                  // src={https://www.youtube.com/embed/G0LFwHpNIVg?autoplay=${autoPlay}}
                  frameborder="0"
                  allowtransparency="true"
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              ) : null
              /* (
              <iframe
                ref={videoRef}
                title="youtube video"
                className="videoIframe js-videoIframe"
                // src={https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay}}
                src={https://www.youtube.com/embed/G0LFwHpNIVg?autoplay=${autoPlay}}
                frameborder="0"
                allowTransparency="true"
                allowfullscreen
                allow="autoplay"
              ></iframe>
            ) */
            }
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;