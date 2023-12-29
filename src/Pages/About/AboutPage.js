import React from 'react'
import contactPoster from '../../images/واجهة-شركة-البحر-الاحمر1.jpg'
import Head from '../../Components/Head/Head'
import { Container } from 'react-bootstrap'
import Brand from '../../Components/Brand/Brand'
import Footer from '../../Components/Footer/Footer'
import Products from '../../Components/Products/Products'
import AboutMain from './AboutMain/AboutMain';

const AboutPage = () => {
  return (
    <div className="Product_page">
      <Head title=" من نحن" poster={contactPoster} />
      <Container>
      <AboutMain title='عن الشركة'/>
      </Container>
      <div className='brandpage_product m-right mt-3'>
    <Products title='منتجات قد تعجبك'/>
    </div>
      <div className="product_Brand">
        <Brand />
      </div>
      <div className="triangle_control">
        <div className="triangle" />
      </div>
      <Footer />
    </div> 
  )
}

export default AboutPage