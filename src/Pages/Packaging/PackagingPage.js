import React, { useContext, useEffect } from 'react'

import contactPoster from '../../images/company 12.jpg';
import Head from '../../Components/Head/Head';
import { Container } from 'react-bootstrap';
import Brand from '../../Components/Brand/Brand';
import Footer from '../../Components/Footer/Footer';
import PackagingMain from './PackagingMain';
import { useTranslation } from 'react-i18next';
import { ContextLang } from '../../App';

const PackagingPage = ({navshow}) => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage } = useContext(ContextLang);
  useEffect(()=>{
    document.title=`${t('page_title')}${t('packaging')}`;
  },[selectedLanguage])

  return (
    <div className='Product_page  Contact'>
        <Head title={t('packaging_title')} poster={contactPoster} navshow={navshow} />
        <Container className='zahra_page'>
      <PackagingMain title={t('packaging_title')} />

      </Container>
        <div className='product_Brand'>
    <Brand />
    </div>
    <div className="triangle_control">
              <div className="triangle" />
            </div>
            <Footer />
    </div>  
    )
}

export default PackagingPage