import "./ProductCad.css";

import React, { useContext, useState } from "react";

import { ContextLang } from "../../../App";
import { IoCloseOutline } from "react-icons/io5";
import { CiZoomIn, CiZoomOut } from "react-icons/ci";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";

import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import CardImgSlider from "../../CardImgSlider/CardImgSlider";
import ProductImgSlider from "../../ProductImgSlider/ProductImgSlider";
import { FaBullseye } from "react-icons/fa";

const ProductCard = ({
  product,
  clickedCard,
  handleClickOnImg,
  handleCloseImg,
}) => {
  const { selectedLanguage } = useContext(ContextLang);
  const [zoomIn, setZoomIn] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [share, setShare] = useState(false);
  const slice = "";
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const toggleFullscreen = () => {
    const elem = document.documentElement;

    if (!document.fullscreenElement) {
      elem.requestFullscreen();
      setFullScreen(true);
    } else {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        `https://dashboard.rsdyemen.com/${product?.images[0].image}`)}`,
      "_blank"
    );
  };

  const shareOnX = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        `https://dashboard.rsdyemen.com/${product?.images[0].image}`)}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="d-flex justify-content-start flex_col w-100">
        <motion.div
          initial={{ opacity: 0, translatX: -50, translateY: -50 }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          trannsition={{ duration: 0.3, delay: 2 }}
          className="card product_card d-flex flex-column "
        >
          <h6 className="pt-3 text-center">
            {product && selectedLanguage === "ar"
              ? product.name_ar
              : product.name_en}
          </h6>
          <div className="img" onClick={() => handleClickOnImg(product?.id)}>
            <img
              alt={product.name_ar}
              src={`https://dashboard.rsdyemen.com/${product?.images[0].image}`}
            />
          </div>
          <button
            className="product_btn"
            onClick={() => {
              navigate(`/products/${product?.id}`);
            }}
          >
            {t("product_btn")}
          </button>
        </motion.div>
        <p
          className="product_description"
          dangerouslySetInnerHTML={{
            __html:
              product && selectedLanguage === "ar"
                ? product.description_ar.slice(0, 70)
                : product.description_en.slice(0, 60),
          }}
        />
        {/* <p className="product_description">
          {product && selectedLanguage === "ar"
            ? product.description_ar.slice(0, 75)
            : product.description_en.slice(0, 66)}
        </p> */}
      </div>
      {clickedCard === product?.id && (
        <div className="product_img_overlay">
          <ul className="icons position-absolute list-unstyled d-flex align-items-center gap-2">
            <li>
              <div className="x_icon icon" onClick={handleCloseImg}>
                <IoCloseOutline />
              </div>
            </li>
            <li className="position-relative" onClick={() => setShare(!share)}>
              <div className="share_icon icon">
                <IoIosShareAlt />
              </div>
              {share && (
                <ul className="list-unstyled position-absolute share_list d-flex gap-2 text-start">
                  <li>
                    <button onClick={shareOnFacebook}>Share on Facebook</button>
                  </li>
                  <li>
                    <button onClick={shareOnX}>Share on X</button>
                  </li>
                </ul>
              )}
            </li>
            <li>
              {!fullScreen ? (
                <div className="full_icon icon" onClick={toggleFullscreen}>
                  <MdOutlineFullscreen />
                </div>
              ) : (
                <div className="full_icon icon" onClick={toggleFullscreen}>
                  <MdOutlineFullscreenExit />
                </div>
              )}
            </li>
            <li>
              {!zoomIn ? (
                <div className="zoom_icon icon" onClick={() => setZoomIn(true)}>
                  <CiZoomIn />
                </div>
              ) : (
                <div
                  className="zoom_icon icon"
                  onClick={() => setZoomIn(false)}
                >
                  <CiZoomOut />
                </div>
              )}
            </li>
          </ul>
          <ProductImgSlider id={product?.id} zoomIn={zoomIn} />
        </div>
      )}
    </>
  );
};

export default ProductCard;