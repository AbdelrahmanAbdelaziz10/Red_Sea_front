import { useNavigate } from "react-router-dom";
import "./card.css";
import { useTranslation } from 'react-i18next';
import React, { useContext } from "react";
import { ContextLang } from "../../../App";

const CardComponent = ({ slide }) => {
  const { selectedLanguage } = useContext(ContextLang);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <div
      className="card slider_card d-flex flex-column mb-5 mt-4"
      key={slide.id}
    >
      <div className="img pt-4">
        <img
          alt={slide.name_ar}
          src={`https://beautyproducts.website/${slide.images[0]?.image}`}
        />
      </div>
      <h6 >{
        slide && selectedLanguage === "ar"
              ? slide.name_ar
              : slide.name_en }</h6>
      <button
        className="product_btn"
        onClick={() => {
          navigate(`/products/${slide.id}`);
        }}
      >
      {t('product_btn')}
      </button>
    </div>
  );
};

export default CardComponent;
