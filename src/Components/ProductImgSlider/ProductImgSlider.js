import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductImgSlider.css";

import Slider from "react-slick";
import useFetch from "../../hooks/useFeatch";

const ProductImgSlider = ({ selectedLanguage, id, zoomIn }) => {
  const { data: slider, loading } = useFetch(
    `/api/v1/products/get-product?productID=${id}`
  );

  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    slidesToScroll: 1,
  };

  return (
    <div className="product_img_slider">
      <Slider {...sliderSettings} className="product_product_slider ">
        {slider &&
          slider[0]?.images.map((slide) => (
            <div
              className={`product_img d-flex justify-content-center my-5 align-content-center ${
                zoomIn ? "zoom_in" : "zoom_out"
              }`}
              key={slider[0].id}
            >
              <img
                alt={slider[0].name_ar}
                src={`https://beautyproducts.website/${slide.image}`}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ProductImgSlider;
