import React from 'react'
import './productdeteils.css';
import Title from '../../../Components/Title/Title';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ProductComp from '../../../Components/Product components/ProductComp';
import productimg from '../../../images/منتج-زهرة3.png';
const ProductDeteils = () => {
  return (
    <section className='product_container  '>
    <div className='product product-details'>
    <Container >
    <div className='prod_title pt-5 '>
    <Title title='منتجاتنا' pragraph='' />
    <div className='product_head'>
    <div className='product-name col-4 mt-4'>
    <h6>صابون زهرة</h6>
    </div>
    </div>

    </div>
    <Row className='d-flex justify-content-center pb-3 mt-5 mx-5 '>
    <Row className='card col-lg-10  '>
        <div className='card_icon col-lg-4'>
        <div className='arrow d-flex align-items-center mt-4'>
    <div className="triangle me-4 mt-1"/>
    <div className="triangle triangle2 me-3"/>

    </div>
        </div>
        <div className='card_img col-lg-4 d-flex justify-content-center'>
        <img src={productimg} alt />
        </div>
        <div className='small_card col-lg-4 '>
        <Card className='card-alpom'>
            <img src={productimg} alt='' />
        </Card>
        <Card className='card-alpom'>
            <img src={productimg} alt='' />
        </Card>
        <Card className='card-alpom'>
            <img src={productimg} alt='' />
        </Card>
        </div>
    </Row>

    </Row>
    <Row className='justify-content-center'>
        <Col lg='11' className='product-contant'>
            <Title title='تفاصيل المنتج' pragraph='مسحوق الغسيل زهرة الاكثر فعالية ينظف ويزيل اصعب البقع مع الملابس البيضاء والملونة' />
            <ProductComp />

        </Col>
    </Row>
    </Container>
    </div>
    

    </section>   
     )
}

export default ProductDeteils