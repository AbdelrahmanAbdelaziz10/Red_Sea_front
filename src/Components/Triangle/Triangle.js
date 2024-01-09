import "./traingle.css";

import React from "react";

const Triangle = ({ backgroundImage, width, height }) => {
  return (
    <div
      className="triangle-com"
      style={{
        color: "var(--heavenly)",
        filter: "url('#goo')",
        width: `${width}`,
        height: `${height}`,
      }}
    >
      <div
        className="triangle-before"
        style={{
          // content: '""',
          // display: "block",
          // paddingTop: "86%",
          // background: "currentColor",
          // clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
          backgroundImage: `url('${backgroundImage}')`,
          // overflow: "hidden",
          // backgroundSize: "cover",
          height: "100%",
        }}
      ></div>
      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 200 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Triangle;