import "./card.css";

import React from "react";

const CardComponent = ({ title, imageSrc, index }) => {

  return (
    <div className="card slider_card d-flex flex-column mb-5 mt-4" key={index}>
      <div className="img pt-4">
        <img alt={title} src={imageSrc} />
      </div>
      <h6>{title}</h6>
      <button className="product_btn">اعرف أكثر</button>
    </div>
  );
};

export default CardComponent;
