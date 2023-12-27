import React from 'react'

import contactPoster from '../../images/واجهة-شركة-البحر-الاحمر12.jpg';
import Head from '../../Components/Head/Head';
import { Container } from 'react-bootstrap';
import Brand from '../../Components/Brand/Brand';
import Footer from '../../Components/Footer/Footer';
import PackagingMain from './PackagingMain';

const PackagingPage = () => {
  return (
    <div className='Product_page  Contact'>
        <Head title='التعبئة والتغليف البلاستيكية' poster={contactPoster}/>
        <Container className='zahra_page'>
      <PackagingMain title='التعبئة والتغليف البلاستيكية'/>

      </Container>
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