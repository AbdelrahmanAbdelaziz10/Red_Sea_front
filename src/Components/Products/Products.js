import React from 'react'
import './Productes.css';
import { Container, Row } from 'react-bootstrap';
import Slider from 'react-slick';

const Products = () => {
  return (
    <section className='product'>
    <Container>
    <Row className="mb-3">
      <div className="map_text mt-4 ">
          <h5> منتجاتنا</h5>
            <div className="triangle_control">
              <div className="triangle" />
            </div>
            <p> منتجاتنا هي افضل منتجات في الاسواق المحلية والخارجية</p>
          </div>
      </Row>
      <Row >
        <Slider />
      </Row>


    </Container>

    </section>
  )
}

export default Products