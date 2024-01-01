import React from 'react'
import './AboutRight.css';
import Title from '../Title/Title';
import { Col, Container, Row } from 'react-bootstrap';
const AboutRight = ({title,head,aboutAr,description2,head2,loading}) => {
  return (   
     <Container className="about position-relative">

    <div className="prod_title m-right pt-4">
      <Title title={title} pragraph="" />
    </div>
      <Row className="d-flex about_right justify-content-center mt-5 pb-2 me-5">
      <Col lg='3' md='12' xs='12' sm='12'>
      <div className=' justify-content-center'>
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
      <Col lg='8' md='10' xs='12' sm='12'>
      <div className='pt-5 about_text'>
      <span className='paragraph-header pe-lg-5 '> {head}</span> <br/>
      <p className='paragraph me-lg-5'>
        {aboutAr}
        </p>
        <p className='description2'>
        <span >{head2}</span><br/>
        {description2&&description2.map((about)=>{
          return(
            <>
            <span className='list'>{about}</span><br/>
            </>
            )
        })}

        </p>
        
      </div>

      </Col>

      </Row>
    </Container>
    )
}

export default AboutRight