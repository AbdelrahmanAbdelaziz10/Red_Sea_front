import "./productdeteils.css";

import { Card, Col, Container, Row } from "react-bootstrap";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import ProductComp from "../../../Components/Product components/ProductComp";
import React from "react";
import Title from "../../../Components/Title/Title";
import productimg from "../../../images/zahra broduct.png";
import { FaRegPlayCircle } from "react-icons/fa";
import { CgMaximizeAlt } from "react-icons/cg";

const ProductDeteils = ({ productData, loading }) => {
  console.log(productData);
  if (loading) {
    return <div>LOADING ...</div>;
  }
  return (
    <section className="product_container  ">
      <div className="product product-details">
        <Container>
          <div className="prod_title pt-5 ">
            <Title title="منتجاتنا" pragraph="" />
            <div className="product_head">
              <div className="product-name col-4 mt-4">
                <h6>{productData?.name_ar}</h6>
              </div>
            </div>
          </div>
          <Row className="d-flex justify-content-center pb-3 mt-5 mx-5 ">
            <Row className="card col-lg-10  ">
              <div className="card_icon">
                <div className="arrow d-flex align-items-center mt-4">
                  <div className="triangle me-4 mt-1" />
                  <div className="triangle triangle2 me-3" />
                </div>
                <div className="show_icon d-block">
                  <div className="icon-border mb-2">
                    <FaRegPlayCircle />
                  </div>
                  <div className="icon-border">
                    <CgMaximizeAlt />
                  </div>
                </div>
              </div>
              <div className="card_img col-lg-8 col-md-5 col-sm-2 d-flex justify-content-center">
                <img
                  src={`https://beautyproducts.website/${productData?.images[0].image}`}
                  alt={productData?.name_en}
                />
              </div>
              <div className="small_card col-lg-4 ">
              {
                productData?.images.map((images)=>{
                  return(
                    <Card className="card-alpom">
                  <img
                  src={`https://beautyproducts.website/${images.image}`}
                    alt=""
                  />
                                  </Card>

                  )
                })
              }

                <div className="arrow-slider  d-flex">
                  <Card className="btn2 border">
                    <IoMdArrowDropup />
                  </Card>
                  <Card className="btn2 border ">
                    <IoMdArrowDropdown />
                  </Card>
                </div>
              </div>
            </Row>
          </Row>
          <Row className="justify-content-center">
            <Col lg="11" className="product-contant m-right">
              <Title
                title="تفاصيل المنتج"
                pragraph={productData?.description_ar}
              />
              <ProductComp  feature={productData?.feature_name_ar} outer={productData?.outer_cover_ar} inner={productData?.inner_cover_ar}/>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ProductDeteils;