import React from 'react'
import productImg1 from "../../images/علامة-توب.png";
import productImg2 from "../../images/علامة-زهراء.png";
import productImg3 from "../../images/علامة-ابو-للوج.png";
import productImg4 from "../../images/علامة-القط-البري.png";
import Title from '../../Components/Title/Title';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../../Components/Common Component/ProdutCard/ProductCard';
import './AllBrand.css';


const cards = [
    {
      imageSrc: productImg1,
    },
    {
      imageSrc: productImg2,
    },
    {
      imageSrc: productImg3,
    },
    {
      imageSrc: productImg4,
    },
    {
      imageSrc: productImg1,
    },
    {
      imageSrc: productImg2,
    },
    {
      imageSrc: productImg3,
    },
    {
      imageSrc: productImg4,
    },
    {
      imageSrc: productImg1,
    },
  ];
  
const AllBrand = () => {
  return (
    <section className='product_container  '>
    <div className='product '>
    <div className='prod_title m_right pt-5'>
    <Title className='' title='العلامات التجارية' pragraph='علامتنا التجارية في السوق المحلية والخارجية' />

    </div>
    <Container className=''>
        <Row className='d-flex justify-content-center pb-5 me-5 '>
            {cards.map((card, index) => (
                <Col lg='4' className='d-flex justify-content-center flex_col'>
          <Card className="brand_card">
            <img src={card.imageSrc} alt='' />
            </Card>
            <p className='product_description mt-2'>عن الشركة عن الشركة عن الشركة عن الشركة عن الشركة عن الشركة عن الشركة </p>
          </Col>

        ))}
        </Row>
    </Container>
    </div>
    

    </section>  )
}

export default AllBrand