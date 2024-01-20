import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductDetailsSlider.css";

import Slider from "react-slick";

const ProductDetailsSlider = ({ productData, setPosterSrc }) => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="product_details_slider">
      <Slider {...sliderSettings} className="details_slider">
        {productData &&
          productData?.images.map((slide) => (
            <div className="img" key={productData.id}>
              <img
                onClick={() => setPosterSrc(slide.image)}
                alt={productData.name_ar}
                src={`https://dashboard.rsdyemen.com/${slide.image}`}
              />
            </div>
          ))}
        {productData &&
          productData?.images.map((slide) => (
            <div className="img" key={productData.id}>
              <img
                onClick={() => setPosterSrc(slide.image)}
                alt={productData.name_ar}
                src={`https://dashboard.rsdyemen.com/${slide.image}`}
              />
            </div>
          ))}
      </Slider>
      <Slider {...settings} className="respons_mobile_slider">
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
    </div>
  );
};

export default ProductDetailsSlider;