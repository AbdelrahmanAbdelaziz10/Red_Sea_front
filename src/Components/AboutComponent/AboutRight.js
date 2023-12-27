import React from 'react'
import './AboutRight.css';
import Title from '../Title/Title';
import { Col, Container, Row } from 'react-bootstrap';
const AboutRight = ({title,paragraph,head1}) => {
  return (
    <div className="product ">
    <div className="prod_title pt-4">
      <Title title={title} pragraph="" />
    </div>
    <Container className="about position-relative">
      <Row className="d-flex justify-content-center mt-5 pb-2 me-5">
      <Col lg='3' >
      <div style={{ height: "20rem" }} >
          <div className="triangle_control about-page-triangle">
            <div className="triangle" />
          </div>
          <div className="triangle_control about-page-triangle about-page-triangle-bg ">
            <div className="triangle" />
          </div>
          <div className="z-img">
          </div>
        </div>
      </Col>
      <Col lg='8' >
      <div className='pt-5'>
      <span className='paragraph-header pe-5 '>{head1} </span> <br/>
      <p className='paragraph me-5'>
        {paragraph}
        </p>
      </div>

      </Col>

      </Row>
    </Container>
  </div>
    )
}

export default AboutRight