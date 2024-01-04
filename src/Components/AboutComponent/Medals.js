import "./AboutLift.css";

import { Col, Container, Row } from "react-bootstrap";

import { BiSolidLeftArrow } from "react-icons/bi";
import React, { useContext } from "react";
import Title from "../Title/Title";
import Triangle from "../Triangle/Triangle";
import { BiSolidRightArrow } from "react-icons/bi";
import { ContextLang } from './../../App';

const AboutLeft = ({ title, head, aboutAr, aboutImage, loading }) => {
  const {selectedLanguage}=useContext(ContextLang)
  return (
    <Container className="about left position-relative modals">
      <div className="prod_title m-right  pt-4">
        <Title title={title} pragraph="" />
      </div>
      <Row className="d-flex justify-content-center mt-5 pb-2 me-3">
        <Col lg="7" md="12" xs="12" sm="12">
          <div className="pt-5 about_text">
            <div className="paragraph">
              <span>{head}</span>
              <br />
              <ul className="medals_list">
                {aboutAr &&
                  aboutAr.map((about) => {
                    return (
                      <li className="mt-2">
                      {
                        selectedLanguage==="ar"? <BiSolidLeftArrow className="arrow ms-1" />: <BiSolidRightArrow className="arrow me-2" />
                      }
                        {about}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </Col>

        <Col lg="4" md="12" xs="12" sm="12">
          <div>
            <div className="triangle-control-com-left">
              <Triangle backgroundImage="" width={"19rem"} height={"19rem"} />
              <Triangle
                backgroundImage={`https://beautyproducts.website/${aboutImage}`}
                width={"19rem"}
                height={"19rem"}
              />
            </div>
            <div className="z-img"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutLeft;