import React from 'react'
import Title from '../Title/Title';
import style from './AboutLift.css';

import { Col, Container, Row } from 'react-bootstrap';
import { BiSolidLeftArrow } from "react-icons/bi";

const AboutLeft = ({title,head,aboutAr,loading}) => {
    return (
      <Container className="about position-relative">
      <div className="prod_title m-right  pt-4">
        <Title title={title} pragraph="" />
      </div>
        <Row className="d-flex justify-content-center mt-5 pb-2 me-3">
        <Col lg='7' md='12' xs='12' sm='12'>
        <div className='pt-5 about_text'>
        <div className='paragraph'>
        <span>{head}</span><br/>
        <ul className='medals_list'>
        {aboutAr&&aboutAr.map((about)=>{
          return(
            <li className='mt-2'>
            <BiSolidLeftArrow className='arrow ms-1'/>
            {about}
            </li>
          )
        })}

        </ul>

          </div>
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

