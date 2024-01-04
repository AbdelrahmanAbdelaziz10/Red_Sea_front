import "./ProductCad.css";

import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';
import { ContextLang } from "../../../App";

const ProductCard = ({ product }) => {
  const { selectedLanguage } = useContext(ContextLang);

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center flex_col">
      <div className="card d-flex flex-column mb-2 mt-4">
        <div className="card_text d-flex mt-3">
          {/* <div className="arrow d-flex align-items-center me-1">
            <div className="triangle triangle1 " />
            <div className="triangle triangle2 " />
          </div> */}
          <h6 className="me-5 pe-4 pt-2">{product&& selectedLanguage==='ar'? product.name_ar:product.name_en}</h6>
        </div>
        <div className="img ">
          <img alt={product.name_ar} src={`https://beautyproducts.website/${product.images[0].image}`} />

        </div>
        <button
          className="product_btn"
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}
        >
         {t('product_btn')}
        </button>
      </div>
      <p className="product_description">
      {product&& selectedLanguage==='ar'? product.description_ar:product.description_en}
      </p>
    </div>
  );
};

export default ProductCard;
