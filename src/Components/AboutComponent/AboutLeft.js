import React from 'react'
import style from './AboutLift.css';
import Title from '../Title/Title';
import { Col, Container, Row } from 'react-bootstrap';

const AboutLeft = ({title,paragraph,head1}) => {
    return (
      <Container className="about position-relative">
      <div className="prod_title m-right  pt-4">
        <Title title={title} pragraph="" />
      </div>
        <Row className="d-flex justify-content-center mt-5 pb-2 me-3">
        <Col lg='7' md='12' xs='12' sm='12'>
        <div className='pt-5 about_text'>
        <p className='paragraph'>
          {paragraph}
          </p>
        </div>
  
        </Col>

        <Col lg='4' md='12' xs='12' sm='12'>
      <div>
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
      
  )
}

export default AboutLeft

