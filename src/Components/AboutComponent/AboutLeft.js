
import { Col, Container, Row } from "react-bootstrap";

import React from "react";
import Title from "../Title/Title";
import Triangle from "../Triangle/Triangle";
import style from "./AboutLift.css";

const AboutLeft = ({ title, head, aboutAr, aboutImage, loading }) => {
  return (
    <Container className="about left position-relative">
      <div className="prod_title m-right  pt-4">
        <Title title={title} pragraph="" />
      </div>
      <Row className="d-flex justify-content-center mt-5 pb-2 me-3">
        <Col lg="7" md="12" xs="12" sm="12">
          <div className="pt-5 about_text">
            <p className="paragraph">
              <span>{head}</span>
              <br />
              {aboutAr}
            </p>
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
            {/* <div className="triangle_control about-left">
              <div className="triangle" />
            </div>
            <div className="triangle_control about-left about-page-triangle-bg ">
              <div className="triangle" />
            </div> */}
            <div className="z-img"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutLeft;

// import React from 'react'
// import style from './AboutLift.css';
// import Title from '../Title/Title';
// import { Col, Container, Row } from 'react-bootstrap';

// const AboutLeft = ({title,head,aboutAr,loading}) => {
//     return (
//       <Container className="about aboutleft position-relative">
//       <div className="prod_title  pt-4">
//         <Title title={title} pragraph="" />
//       </div>
//         <Row className="d-flex justify-content-center mt-5 pb-2 me-3">
//         <Col lg='7' md='12' xs='12' sm='12'>
//         <div className='pt-5 about_text'>
//         <p className='paragraph'>
//         <span>{head}</span><br/>
//           {aboutAr}
//           </p>
//         </div>
  
//         </Col>

//         <Col lg='4' md='12' xs='12' sm='12'>
//       <div>
//           <div className="triangle_control about-left about-page-triangle">
//             <div className="triangle" />
//           </div>
//           <div className="triangle_control about-left about-page-triangle about-page-triangle-bg ">
//             <div className="triangle" />
//           </div>
//           <div className="z-img">
//           </div>
//         </div>
//       </Col>

//         </Row>
//       </Container>
      
//   )
// }

// export default AboutLeft

