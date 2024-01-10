import "./title.css";

import React from "react";

const Title = ({ title, pragraph }) => {
  return (
    <div className="map_text mt-4 ">
      <div className="triangle_control ">
        <div className="triangle" />
      </div>
      <h4>{title}</h4>

      <p dangerouslySetInnerHTML={{ __html: pragraph }} />
    </div>
  );
};

export default Title;
