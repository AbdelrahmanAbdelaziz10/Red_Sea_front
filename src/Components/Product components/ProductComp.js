import React from "react";
import "./productcomp.css";
import { Col, Row } from "react-bootstrap";
const ProductComp = ({feature,outer,inner}) => {
  return (
    <Row className=" mb-4 justify-content-center">
      <Col lg="4" md='4' xs='6'>
        <ul>
          <li>اسم المنتج</li>
          {feature&&
            feature.map((product)=>{
              return(
                <>
                  <li className="table_list mt-2">{product}</li>
                </>
              )
            })
          }
        </ul>
      </Col>
      <Col lg="4" md='4' xs='6'>
        <ul>
          <li>التغليف الخارجي</li>
          {outer&&
            outer.map((product)=>{
              return(
                <>
                  <li className="table_list mt-2">{product}</li>
                </>
              )
            })
          }
        </ul>
      </Col>
      <Col lg="4" md='4' xs='6'>
        <ul>
          <li>عبوة الكرتونة /الجونية</li>
          {inner&&
            inner.map((product)=>{
              return(
                <>
                  <li className="table_list mt-2">{product}</li>
                </>
              )
            })
          }
        </ul>
      </Col>

      {/* <tbody>
    <tr>
      <td>زهرة باكتات عبوة 200 جرام</td>
      <td>كرتونة</td>
      <td>48 باكت</td>
    </tr>
    <tr>
    <td>زهرة باكتات 200 جرام</td>
      <td>كرتونة</td>
      <td>شنطة</td>
    </tr>
    <tr>
    <td>زهرة اكياس 2 كيلو</td>
      <td >24 باكت</td>
      <td >6 اكياس</td>
    </tr>
    <tr>
    <td>زهرة اكياس 2 كيلو</td>
      <td >24 باكت</td>
      <td >6 اكياس</td>
    </tr>
    
  </tbody> */}
    </Row>
  );
};

export default ProductComp;
