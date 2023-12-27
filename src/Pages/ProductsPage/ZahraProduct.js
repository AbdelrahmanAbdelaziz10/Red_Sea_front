import Brand from './../../Components/Brand/Brand';
import { Container } from 'react-bootstrap';
import Footer from './../../Components/Footer/Footer';
import Head from '../../Components/Head/Head';
import PolicyConant from '../PrivacyPolicy/PoliceMainComponent/PolicyConant';
import Products from '../../Components/Products/Products';
import React from 'react'
import contactPoster from '../../images/واجهة-شركة-البحر-الاحمر3.jpg';
import ProductDeteils from './ProductDeteils/ProductDeteils';

const ZahraProduct = () => {
  return (
    <div className='Product_page Contact '>
        <Head title='منتجاتنا< منتج الزهراء' poster={contactPoster}/>
        <Container>
            <ProductDeteils />
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