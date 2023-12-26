import React from 'react'

import contactPoster from '../../images/واجهة-شركة-البحر-الاحمر12.jpg';
import Head from '../../Components/Head/Head';
import { Container } from 'react-bootstrap';
import PolicyConant from '../PrivacyPolicy/PoliceMainComponent/PolicyConant';
import Products from '../../Components/Products/Products';
import Brand from '../../Components/Brand/Brand';
import Footer from '../../Components/Footer/Footer';

const PackagingPage = () => {
  return (
    <div className='Product_page Contact'>
        <Head title='منتجاتنا<  التعبئة والتغليف البلاستيكية' poster={contactPoster}/>
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

export default PackagingPage