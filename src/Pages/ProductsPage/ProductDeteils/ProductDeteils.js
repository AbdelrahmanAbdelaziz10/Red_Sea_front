import "./productdeteils.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Mousewheel, Pagination } from "swiper/modules";
import { Card, Col, Container, Row } from "react-bootstrap";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CgMaximizeAlt } from "react-icons/cg";
import { ContextLang } from "../../../App";
import { FaRegPlayCircle } from "react-icons/fa";
import ProductComp from "../../../Components/Product components/ProductComp";
import Title from "../../../Components/Title/Title";
import { useTranslation } from "react-i18next";

const ProductDeteils = ({ productData, loading }) => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage } = useContext(ContextLang);
  const [play, setPlay] = useState(false);
  const [posterSrc, setPosterSrc] = useState("");
  const videoRef = useRef(null);

  const playVideo = () => {
    setPlay(!play);
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
  const autoPlay = !play ? 0 : 1;

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
          <Row className="d-flex justify-content-center pb-3 mt-5 mx-5 ">
            <Row className="card col-lg-10  ">
              <div className="card_icon">
                {/* <div className="arrow d-flex align-items-center mt-4">
                  <div className="triangle me-4 mt-1" />
                  <div className="triangle triangle2 me-3" />
                </div> */}
                <div className="show_icon d-block">
                  <div className="icon-border mb-2" onClick={playVideo}>
                    <FaRegPlayCircle />
                  </div>
                  {/* <div className="icon-border">
                    <CgMaximizeAlt />
                  </div> */}
                </div>
              </div>
              <div className="card_img col-lg-8 col-md-5 col-sm-2 d-flex justify-content-center">
                <div className="p-relative video-container">
                  <iframe
                    ref={videoRef}
                    title="youtube video"
                    class="videoIframe js-videoIframe"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay}`}
                    frameborder="0"
                    allowTransparency="true"
                    allowfullscreen
                    allow="autoplay"
                  ></iframe>
                  {!play && (
                    <div class="poster-overlay">
                      <img
                        src={`https://beautyproducts.website/${posterSrc}`}
                        alt="Video Poster"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="small_card col-lg-4 ">
                <Swiper
                  direction={"vertical"}
                  slidesPerView={3}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[ Pagination]}
                  className="mySwiper"
                >
                    {productData?.images.map((images) => {
                      return (
                        <SwiperSlide className="card-alpom"
                        onClick={() => setPosterSrc(images.image)}>
                          <img
                            src={`https://beautyproducts.website/${images.image}`}
                            alt=""
                          />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
                {/*<div className="arrow-slider  d-flex">
                  <Card className="btn2 border">
                    <IoMdArrowDropup />
                  </Card>
                  <Card className="btn2 border ">
                    <IoMdArrowDropdown />
                  </Card>
                </div>{" "}
                */}
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
        </Container>
      </div>
    </section>
  );
};

export default ProductDeteils;
