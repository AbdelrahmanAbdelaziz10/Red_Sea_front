import "./Product.css";

import { Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";

import ProductCard from "./../../Common Component/ProdutCard/ProductCard";
import Title from "../../Title/Title";
import productImg1 from "../../../images/topbroduct.png";
import useFetch from "./../../../hooks/useFeatch";
import { useTranslation } from "react-i18next";

const Product = ({setNavshow}) => {
  const [clickedCard, setClickedCard] = useState(null);
  const { t, i18n } = useTranslation();
  const { data: product } = useFetch("/api/v1/products");

  const handleClickOnImg = (cardId) => {
    // console.log(cardId);
    setClickedCard(cardId === clickedCard ? null : cardId);
    setNavshow("false")
  };

  const handleCloseImg = (cardId) => {
    setClickedCard(null);
    setNavshow("true")
  };

  return (
    <section className="product_container  ">
      <div className="product">
        <div className="prod_title pt-4">
          <Title title={t("product")} pragraph={t("product_p")} />
        </div>
        <Container className="">
          <Row className="d-flex product_row justify-content-center pb-2 ">
            {product.map((product) => (
              <Col
                key={product.id}
                lg="4"
                md="6"
                sm="12"
                xs="12"
                className="d-flex justify-content-between"
              >
                <ProductCard
                  product={product}
                  clickedCard={clickedCard}
                  handleClickOnImg={handleClickOnImg}
                  handleCloseImg={handleCloseImg}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Product;
