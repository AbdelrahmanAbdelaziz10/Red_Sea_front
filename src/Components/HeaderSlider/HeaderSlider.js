import "react-awesome-slider/dist/styles.css";

import { useContext, useEffect, useState } from "react";

import AwesomeSlider from "react-awesome-slider";
import { CiLocationArrow1 } from "react-icons/ci";
import { ContextLang } from "../../App";
import { useInView } from "react-intersection-observer";
import withAutoplay from "react-awesome-slider/dist/autoplay";

// import AwesomeSliderStyles from "react-awesome-slider/src/styles";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function HeaderSlider({ slider }) {
  const { selectedLanguage } = useContext(ContextLang);

  const [ref1, inView1] = useInView();
  const [autoPlaySlider, setAutoPlaySlider] = useState(0);

  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  useEffect(() => {
    if (inView1) {
      setAutoPlaySlider(1);
    } else {
      setAutoPlaySlider(0);
    }
  }, [inView1]);

  return (
    // <AutoplaySlider
    //   play={true}
    //   cancelOnInteraction={false} // should stop playing on user interaction
    //   interval={2000}
    //   className="mySwiper"
    // >
    //   {slider.map((slide) =>
    //     // <div data-src={`https://dashboard.rsdyemen.com//${slide?.slider}`} />
    //     slide?.slider !== null ? (
    //       <div data-src={`https://dashboard.rsdyemen.com//${slide?.slider}`} />
    //     ) : (
    //       //   <img src={`https://dashboard.rsdyemen.com//${slide?.slider}`} alt="" />
    //       <div className="video_slider" ref={ref1}>
    //         <iframe
    //           title="youtube video"
    //           className="videoIframe js-videoIframe"
    //           src={`https://www.youtube.com/embed/${getVideoId(
    //             slide?.video_url
    //           )}?autoplay=${autoPlaySlider}&loop=1&controls=0&mute=1`}
    //           frameborder="0"
    //           allowTransparency="true"
    //           allowfullscreen
    //           allow="autoplay"
    //         ></iframe>
    //       </div>
    //     )
    //   )}
    // </AutoplaySlider>
    <div className="mySwiper">
      <AwesomeSlider
        play={true}
        cancelOnInteraction={false}
        interval={2000}
        // organicArrows={false}
        bullets={false}
        //   cssModule={AwesomeSliderStyles}
      >
        {slider &&
          slider.map((slide, idx) => (
            <div
              key={slide.id}
              data-src={`https://dashboard.rsdyemen.com//${slide.slider}`}
            >
              {slide.video_url ? (
                <div className="video_slider">
                  <iframe
                    title="youtube video"
                    className="videoIframe js-videoIframe"
                    src={`https://www.youtube.com/embed/${getVideoId(
                      slide.video_url
                    )}?autoplay=${autoPlaySlider}&loop=1&controls=0&mute=1`}
                    frameBorder="0"
                    allowTransparency="true"
                    allowFullScreen
                    allow="autoplay"
                  ></iframe>
                </div>
              ) : null}
              <div className="header_hover" />
              <div className="head_text">
                <div className="slider_arrow">
                  <CiLocationArrow1
                    className=" arrow_r"
                    onClick={() => {
                      // Implement your navigation logic here
                    }}
                  />
                  <CiLocationArrow1
                    className="arrow_l"
                    onClick={() => {
                      // Implement your navigation logic here
                    }}
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
            </div>
          ))}
      </AwesomeSlider>
    </div>
  );
}

export default HeaderSlider;
