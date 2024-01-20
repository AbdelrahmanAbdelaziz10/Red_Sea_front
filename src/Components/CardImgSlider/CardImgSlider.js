import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardImgSlider.css";

import Slider from "react-slick";
import useFetch from "./../../hooks/useFeatch";

const CardImgSlider = ({ selectedLanguage, id }) => {
  const { data: slider, loading } = useFetch(
    `/api/v1/products/get-product?productID=${id}`
  );

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };

  return (
    <div className="card_img_slider">
      <Slider {...sliderSettings} className="home_product_slider">
        {slider &&
          slider[0]?.images.map((slide) => (
            <div className="img d-flex justify-content-center align-content-center" key={slider[0].id}>
              <img
                alt={slider[0].name_ar}
                src={`https://dashboard.rsdyemen.com//${slide.image}`}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default CardImgSlider;