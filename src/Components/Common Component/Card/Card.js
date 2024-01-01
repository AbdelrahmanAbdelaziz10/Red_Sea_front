import { useNavigate } from "react-router-dom";
import "./card.css";

import React from "react";

const CardComponent = ({ slide }) => {
  const navigate = useNavigate();

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
      <h6>{slide.name_ar}</h6>
      <button
        className="product_btn"
        onClick={() => {
          navigate(`/products/${slide.id}`);
        }}
      >
        اعرف أكثر
      </button>
    </div>
  );
};

export default CardComponent;
