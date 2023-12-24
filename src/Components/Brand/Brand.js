import React from "react";
import "./Brand.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import apolpg from '../../images/علامة-ابو-للوج.png';
import Wildcat from '../../images/علامة-القط-البري.png';

const Brand = () => {
  return (
    <section className="brand">
    <Container>
    <Row className="mb-3">
      <div className="map_text mt-4 ">
          <h5>  العلامات التجارية</h5>
            <div className="triangle_control">
              <div className="triangle" />
            </div>
            <p>علامتنا التجارية في السوق المحلية والخارجية</p>
          </div>
      </Row>
      <Row className="mb-5">
        <Col lg='3'>
            <Card className="brand_card">
            <img src={apolpg} alt='' />
            </Card>
        </Col>
        <Col lg='3'>
            <Card className="brand_card">
            <img src={apolpg} alt='' />
            </Card>
        </Col>
        <Col lg='3'>
            <Card className="brand_card">
            <img src={apolpg} alt='' />
            </Card>
        </Col>
        <Col lg='3'>
            <Card className="brand_card">
            <img src={apolpg} alt='' />
            </Card>
        </Col>
      </Row>
    </Container>


    </section>
  );
};

export default Brand;
