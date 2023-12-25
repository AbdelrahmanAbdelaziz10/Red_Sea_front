import React from "react";
import "./LocationMap.css";
import { Row } from "react-bootstrap";
import Title from './../Title/Title';
import { Map } from './../Map/Map';
const LocationMap = ({title}) => {
  return (
    <section className="location">
      <Row>
      <Title title={title} pragraph=''/>
      <Map />
      </Row>
    </section>
  );
};

export default LocationMap;
