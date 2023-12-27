import React from 'react'
import style from './AboutLift.css';
import Title from '../Title/Title';
import { Col, Container, Row } from 'react-bootstrap';

const AboutLeft = ({title,paragraph,head1}) => {
    return (
      <div className="product">
      <div className="prod_title m-right  pt-4">
        <Title title={title} pragraph="" />
      </div>
      <Container className="about position-relative">
        <Row className="d-flex justify-content-center mt-5 pb-2 me-3">
        <Col lg='7' >
        <div className='pt-5'>
        <p className='paragraph'>
          {paragraph}
          </p>
        </div>
  
        </Col>
  
        <Col lg='4' >
      <div style={{ height: "20rem" }} >
          <div className="triangle_control about-left">
            <div className="triangle" />
          </div>
          <div className="triangle_control about-left about-page-triangle-bg ">
            <div className="triangle" />
          </div>
          <div className="z-img">
          </div>
        </div>
      </Col>

        </Row>
      </Container>
    </div>
      
  )
}

export default AboutLeft

