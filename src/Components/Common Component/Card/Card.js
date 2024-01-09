import "./card.css";

import React, { useContext } from "react";

import CardImgSlider from "../../CardImgSlider/CardImgSlider";
import { ContextLang } from "../../../App";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CardComponent = ({
  slide,
  clickedCard,
  handleClickOnImg,
  handleCloseImgSlider,
}) => {
  const { selectedLanguage } = useContext(ContextLang);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div
      className={`card slider_card d-flex flex-column mb-5 mt-4 ${
        clickedCard === slide.id ? "hovered_card" : ""
      }`}
      key={slide.id}
      id={slide.id}
    >
      <div className="slider_card_overlay position-absolute" />
      {clickedCard === slide.id && (
        <div className="x_icon" onClick={handleCloseImgSlider}>
          <IoCloseOutline />
        </div>
      )}
      {clickedCard === slide.id ? (
        <CardImgSlider id={slide.id} />
      ) : (
        <div className="img pt-4" onClick={() => handleClickOnImg(slide.id)}>
          <img
            alt={slide.name_ar}
            src={`https://beautyproducts.website/${slide.images[0]?.image}`}
          />
        </div>
      )}
      {/* <h6>
        {slide && selectedLanguage === "ar" ? slide.name_ar : slide.name_en}
      </h6> */}
      <button
        className="product_btn"
        onClick={() => {
          navigate(`/products/${slide.id}`);
        }}
      >
        {t("product_btn")}
      </button>
    </div>
  );
};

export default CardComponent;