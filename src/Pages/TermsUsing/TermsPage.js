import React from 'react'
import Head from '../../Components/Head/Head'
import { Container } from 'react-bootstrap'
import Brand from '../../Components/Brand/Brand'
import Footer from '../../Components/Footer/Footer'
import contactPoster from '../../images/company 9.jpg'
import TermsMain from './TermsMainComponent/TermsMain';

const TermsPage = () => {
    return (
        <div className="Product_page">
          <Head title="شروط الاستخدام" poster={contactPoster} />
          <Container>
          <TermsMain />
          </Container>
          <div className="product_Brand">
            <Brand />
          </div>
          <div className="triangle_control">
            <div className="triangle" />
          </div>
          <Footer />
        </div>  )
}

export default TermsPage