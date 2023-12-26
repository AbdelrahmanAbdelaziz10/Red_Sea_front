import React from 'react'
import './Product.css';
import Title from '../../Title/Title';
import { Col, Container, Row } from 'react-bootstrap';
import CardComponent from '../../Common Component/Card/Card';
import productImg1 from "../../../images/منتج-توب.png";
import productImg2 from "../../../images/باكت-الشروق.png";
import productImg3 from "../../../images/منتج-زهرة3.png";
import productImg4 from "../../../images/ابو-اللو.png";
import ProductCard from './../../Common Component/ProdutCard/ProductCard';

const cards = [
    {
      imageSrc: productImg1,
      title: "صابون ثوب",
    },
    {
      imageSrc: productImg2,
      title: "صابون شروق",
    },
    {
      imageSrc: productImg3,
      title: "صابون زهره",
    },
    {
      imageSrc: productImg4,
      title: "صابون ابوللو",
    },
    {
      imageSrc: productImg1,
      title: "صابون ثوب",
    },
    {
      imageSrc: productImg2,
      title: "صابون شروق",
    },
    {
      imageSrc: productImg3,
      title: "صابون زهره",
    },
    {
      imageSrc: productImg4,
      title: "صابون ابوللو",
    },
  ];

const Product = () => {
  return (
    <section className='product_container  '>
    <div className='product'>
    <div className='prod_title pt-4'>
    <Title title='منتجاتنا' pragraph='منتجاتنا من الافضل في الاسواق المحلية والخارجية' />

    </div>
    <Container className=''>
        <Row className='d-flex justify-content-center pb-2 me-5'>
            {cards.map((card, index) => (
                <Col lg='4' className='d-flex justify-content-center'>
          <ProductCard index={index} title={card.title} imageSrc={card.imageSrc} />

          </Col>

        ))}
        </Row>
    </Container>
    </div>
    

    </section>

  )
}

export default Product