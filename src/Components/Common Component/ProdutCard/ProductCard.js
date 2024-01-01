import "./ProductCad.css";

import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center flex_col">
      <div className="card d-flex flex-column mb-2 mt-4">
        <div className="card_text d-flex mt-3">
          <div className="arrow d-flex align-items-center me-1">
            <div className="triangle triangle1 me-4 mt-1" />
            <div className="triangle triangle2 me-2" />
          </div>
          <h6 className="me-5 pe-4 pt-2">{product.name_ar}</h6>
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
          اعرف أكثر
        </button>
      </div>
      <p className="product_description">
      {product.description_ar}
      </p>
    </div>
  );
};

export default ProductCard;
