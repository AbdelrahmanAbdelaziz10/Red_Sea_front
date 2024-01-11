import "./AboutRight.css";

import { Col, Container, Row } from "react-bootstrap";

import React from "react";
import Title from "../Title/Title";
import Triangle from "../Triangle/Triangle";

const AboutRight = ({
  title,
  head,
  aboutAr,
  aboutImage,
  description2,
  head2,
  loading,
}) => {
  return (
    <Container className="about right description position-relative">
      <div className="prod_title m-right pt-4">
        <Title title={title} pragraph="" />
      </div>
      <Row className="d-flex about_right justify-content-center mt-5 pb-2 me-lg-5">
        <Col lg="3" md="12" xs="12" sm="12">
          <div className=" justify-content-center">
            <div className="triangle-control-com">
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
        <Col lg="8" md="10" xs="12" sm="12">
          <div className="pt-lg-5 about_text">
            <span className="paragraph-header pe-lg-5 "> {head}</span> <br />
            <p className="paragraph me-lg-5">{aboutAr}</p>
            <p className="description2">
              <span>{head2}</span>
              <br />
              {/* {description2 &&
                description2.map((about) => {
                  return (
                    <>
                      <span className="list">{about}</span>
                      <br />
                    </>
                  );
                })} */}
              {description2 && (
                <>
                  <span
                    className="list"
                    dangerouslySetInnerHTML={{ __html: description2 }}
                  />
                  <br />
                </>
              )}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutRight;
