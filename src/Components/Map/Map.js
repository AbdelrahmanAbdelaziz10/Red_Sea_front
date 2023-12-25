import React from "react";
import { Row } from "react-bootstrap";
import './Map.css';
export const Map = () => {
  return (
      
      <div className="map ">
        <iframe
          className="location_iframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d440893.37645141146!2d30.918057!3d30.308875999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845d7be44ef8d%3A0x20a5e26d48314e73!2s4%20Dr%20Khaled%2C%20Oula%20Al%20Haram%2C%20El%20Omraniya%2C%20Giza%20Governorate%203537204%2C%20Egypt!5e0!3m2!1sen!2sus!4v1703424936393!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  );
};
