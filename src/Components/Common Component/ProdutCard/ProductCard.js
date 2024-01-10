import "./ProductCad.css";

import React, { useContext } from "react";

import { ContextLang } from "../../../App";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const ProductCard = ({ product }) => {
  const { selectedLanguage } = useContext(ContextLang);
  const slice = "";
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center flex_col w-100">
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
        <div className="img ">
          <img
            alt={product.name_ar}
            src={`https://beautyproducts.website/${product.images[0].image}`}
          />
        </div>
        <button
          className="product_btn"
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}
        >
          {t("product_btn")}
        </button>
      </motion.div>
      <p className="product_description">
        {product && selectedLanguage === "ar"
          ? product.description_ar.slice(0, 75)
          : product.description_en.slice(0, 66)}
      </p>
    </div>
  );
};

export default ProductCard;