import "./Brand.css";

import { Card, Col, Container, Row } from "react-bootstrap";

import React from "react";
import Title from "../Title/Title";
import Wildcat from "../../images/علامة-القط-البري.png";
import apolpg from "../../images/علامة-ابو-للوج.png";
import topbrand from "../../images/علامة-توب.png";
import zahrabrand from "../../images/علامة-زهراء.png";

const Brand = () => {
  return (
    <section className="brand mb-md-5">
      <Container>
        <Row className="mb-3 m-right ">
          <Title
            title="العلامات التجارية"
            pragraph="علامتنا التجارية في السوق المحلية والخارجية"
          />
        </Row>
        <Row className="mb-5 pb-md-4 mb-md-5">
          <Col
            xs="6"
            lg="3"
            md="3"
            sm="6"
            className="d-flex justify-content-center"
          >
            <Card className="brand_card pb-2 mb-2">
              <img src={zahrabrand} alt="" />
            </Card>
          </Col>
          <Col
            xs="6"
            lg="3"
            md="3"
            sm="6"
            className="d-flex justify-content-center"
          >
            <Card className="brand_card mb-2">
              <img src={topbrand} alt="" />
            </Card>
          </Col>
          <Col
            xs="6"
            lg="3"
            md="3"
            sm="6"
            className="d-flex justify-content-center"
          >
            <Card className="brand_card mb-2">
              <div className="brand_img">
                <img src={Wildcat} alt="" />
              </div>
            </Card>
          </Col>
          <Col
            xs="6"
            lg="3"
            md="3"
            sm="6"
            className="d-flex justify-content-center"
          >
            <Card className="brand_card mb-2">
              <Card.Img variant="top" src={apolpg} />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Brand;
