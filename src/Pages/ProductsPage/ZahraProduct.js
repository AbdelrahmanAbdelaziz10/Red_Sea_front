import React from 'react'
import Footer from './../../Components/Footer/Footer';
import Products from '../../Components/Products/Products';
import Brand from './../../Components/Brand/Brand';
import Head from '../../Components/Head/Head';
import contactPoster from '../../images/واجهة-شركة-البحر-الاحمر3.jpg';
import { Container } from 'react-bootstrap';
import PolicyConant from '../PrivacyPolicy/PoliceMainComponent/PolicyConant';

const ZahraProduct = () => {
  return (
    <div className='Product_page Contact'>
        <Head title='منتجاتنا< منتج الزهراء' poster={contactPoster}/>
        <Container>
      <PolicyConant />
      </Container>
    <div className='page_product'>
    <Products />
    </div>
        <div className='product_Brand'>
    <Brand />
    </div>
    <div className='triangle_control'>
    <div className="triangle"/>
    </div>
        <Footer />
    </div>  
    )
}

export default ZahraProduct