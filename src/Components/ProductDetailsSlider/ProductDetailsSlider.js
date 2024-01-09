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

  return (
    <div className="product_details_slider">
      <Slider {...sliderSettings} className="">
        {productData &&
          productData?.images.map((slide) => (
            <div className="img" key={productData.id}>
              <img
                onClick={() => setPosterSrc(slide.image)}
                alt={productData.name_ar}
                src={`https://beautyproducts.website/${slide.image}`}
              />
            </div>
          ))}
        {productData &&
          productData?.images.map((slide) => (
            <div className="img" key={productData.id}>
              <img
                onClick={() => setPosterSrc(slide.image)}
                alt={productData.name_ar}
                src={`https://beautyproducts.website/${slide.image}`}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ProductDetailsSlider;