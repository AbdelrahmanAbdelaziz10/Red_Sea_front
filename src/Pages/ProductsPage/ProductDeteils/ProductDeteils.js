import "./productdeteils.css";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { useContext, useEffect, useRef, useState } from "react";

import { ContextLang } from "../../../App";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import ProductComp from "../../../Components/Product components/ProductComp";
import ProductDetailsSlider from "../../../Components/ProductDetailsSlider/ProductDetailsSlider";
import Title from "../../../Components/Title/Title";
import { useTranslation } from "react-i18next";

const ProductDeteils = ({ productData, loading }) => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage } = useContext(ContextLang);
  const [play, setPlay] = useState(false);
  const [posterSrc, setPosterSrc] = useState("");
  const videoRef = useRef(null);

  const playVideo = () => {
    setPlay(true);
  };

  const handleCloseDialog = () => {
    setPlay(false);
  };

  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  useEffect(() => {
    setPosterSrc(productData?.images[0].image);
  }, [productData?.images]);

  const videoId = getVideoId(productData?.video);

  if (loading) {
    return <div>LOADING ...</div>;
  }

  return (
    <section className="product_container  ">
      <div className="product product-details">
        <Container>
          <div className="prod_title pt-5 ">
            <Title title={t("product")} pragraph="" />
            <div className="product_head">
              <div className="product-name col-4 mt-4">
                <h6>
                  {productData && selectedLanguage === "ar"
                    ? productData.name_ar
                    : productData?.name_en}
                </h6>
              </div>
            </div>
          </div>
          <Row className="d-flex  justify-content-center pb-3 mt-5 mx-5">
            <Row className="card col-lg-10  pb-4 position-relative">
              <div className="card_icon">
                <div className="show_icon d-block">
                  <div className="icon-border mb-2" onClick={playVideo}>
                    <FaRegPlayCircle />
                  </div>
                </div>
              </div>
              <div className="card_img col-lg-8 col-md-5 col-sm-2 d-flex justify-content-center">
                <div className="poster-overlay">
                  <img
                    src={`https://beautyproducts.website/${posterSrc}`}
                    alt="Video Poster"
                  />
                </div>
              </div>
              <div className="small_card col-lg-4 ">
                <ProductDetailsSlider
                  productData={productData}
                  setPosterSrc={setPosterSrc}
                />
              </div>
            </Row>
          </Row>
          <Row className="justify-content-center">
            <Col lg="11" className="product-contant mr-right">
              <Title
                title={t("product_deteils")}
                pragraph={
                  productData && selectedLanguage === "ar"
                    ? productData.description_ar
                    : productData?.description_en
                }
              />
              <ProductComp
                selectedLanguage={selectedLanguage}
                feature={
                  selectedLanguage === "ar"
                    ? productData?.feature_name_ar
                    : productData?.feature_name_en
                }
                outer={
                  selectedLanguage === "ar"
                    ? productData?.outer_cover_ar
                    : productData?.outer_cover_en
                }
                inner={
                  selectedLanguage === "ar"
                    ? productData?.inner_cover_ar
                    : productData?.inner_cover_en
                }
              />
            </Col>
          </Row>
          {play && (
            <div className="video-wrapper">
              <div className="video-dialog">
                <div
                  className="icon_x position-absolute"
                  onClick={handleCloseDialog}
                >
                  <IoCloseOutline />
                </div>
                <iframe
                  ref={videoRef}
                  title="youtube video"
                  className="videoIframe js-videoIframe"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=${0}`}
                  frameborder="0"
                  allowTransparency="true"
                  allowfullscreen
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
};

export default ProductDeteils;