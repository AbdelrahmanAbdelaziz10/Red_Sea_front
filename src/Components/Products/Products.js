import React from "react";
import "./Productes.css";
import { Container, Row } from "react-bootstrap";
import Sliders from "../Sliders/Sliders";
import Title from "../Title/Title";

const Products = ({title}) => {
  return (
    <section className="product mt-5 ">
      <Container>
      <div className='prod_title pt-4'>
        <Title title={title} pragraph='منتجاتنا هي افضل منتجات في الاسواق المحلية والخارجية' />

        </div>
        <Row>
          <Sliders />
        </Row>
      </Container>
    </section>
  );
};

export default Products;