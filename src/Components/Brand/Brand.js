import React from "react";
import "./Brand.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import apolpg from '../../images/علامة-ابو-للوج.png';
import Wildcat from '../../images/علامة-القط-البري.png';
import topbrand from '../../images/علامة-توب.png';
import zahrabrand from '../../images/علامة-زهراء.png';

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
            <img src={zahrabrand} alt='' />
            </Card>
        </Col>
      <Col lg='3'>
            <Card className="brand_card">
            <img src={topbrand} alt='' />
            </Card>
        </Col>
        <Col lg='3'>
            <Card className="brand_card">
            <div className="brand_img">
            <img src={Wildcat} alt=''/>

            </div>
            </Card>
        </Col>
        <Col lg='3'>
            <Card className="brand_card">
            <Card.Img variant="top" src={apolpg} />
            </Card>
        </Col>


      </Row>
    </Container>


    </section>
  );
};

export default Brand;
