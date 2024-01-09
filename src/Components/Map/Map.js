import React from "react";
import "./Map.css";
export const Map = () => {
  return (
    <div className="map">
      <iframe
        className="location_iframe "
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.9025182331343!2d44.155390499999996!3d13.6636911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x161c5ea18f04f761%3A0x83cebe574acd8b7c!2z2LTYsdmD2Kkg2KfZhNio2K3YsSDYp9mE2KPYrdmF2LEg2YTZhNmF2YbYuNmB2KfYqiDYp9mE2YXYrdiv2YjYr9ip!5e0!3m2!1sar!2seg!4v1704704620779!5m2!1sar!2seg"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

    </div>
  );
};
