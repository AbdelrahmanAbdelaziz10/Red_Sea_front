import "./productcomp.css";

import { Col, Row } from "react-bootstrap";

import React from "react";

const ProductComp = ({ feature, outer, inner, selectedLanguage }) => {
  return (
    <Row className=" mb-4 justify-content-center">
       <Col lg="4" md="4" xs="6">
        <ul>
          <li>{selectedLanguage === "ar" ? " اسم المنتج " : "product name"}</li>
          {feature && feature.map((product) => {
              return (
                <>
                  <li className="table_list mt-2">{product}</li>
                </>
              );
            })}
        </ul>
      </Col>
      <Col lg="4" md="4" xs="6">
        <ul>
          <li>
            {selectedLanguage === "ar"
              ? " التغليف الخارجي "
              : "Outer Packaging"}
          </li>
          {outer &&
            outer.map((product) => {
              return (
                <>
                  <li className="table_list mt-2">{product}</li>
                </>
              );
            })}
        </ul>
      </Col> 
       <Col lg="4" md="4" xs="6">
        <ul>
          <li>
            {selectedLanguage === "ar"
              ? " عبوة الكرتونة /الجونية"
              : "Cardboard Packaging / Carton Box"}
          </li>
          {inner &&
            inner.map((product) => {
              return (
                <>
                  <li className="table_list mt-2">{product}</li>
                </>
              );
            })}
        </ul>
      </Col> 

    </Row>
  );
};

export default ProductComp;