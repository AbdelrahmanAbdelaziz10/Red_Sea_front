import React from 'react'

import contactPoster from '../../images/company 12.jpg';
import Head from '../../Components/Head/Head';
import { Container } from 'react-bootstrap';
import Brand from '../../Components/Brand/Brand';
import Footer from '../../Components/Footer/Footer';
import PackagingMain from './PackagingMain';
import { useTranslation } from 'react-i18next';

const PackagingPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className='Product_page  Contact'>
        <Head title={t('packaging_title')} poster={contactPoster}/>
        <Container className='zahra_page'>
      <PackagingMain title={t('packaging_title')} />

      </Container>
        <div className='product_Brand'>
    <Brand />
    </div>

    </div>  
    )
}

export default PackagingPage