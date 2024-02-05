import React, { useContext, useEffect } from 'react'
import Head from '../../Components/Head/Head'
import { Container } from 'react-bootstrap'
import Brand from '../../Components/Brand/Brand'
import contactPoster from '../../images/company 9.jpg'
import TermsMain from './TermsMainComponent/TermsMain';
import { useTranslation } from 'react-i18next';
import { ContextLang } from '../../App'
import Footer from '../../Components/Footer/Footer'
const TermsPage = ({navshow}) => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage } = useContext(ContextLang);

  useEffect(()=>{
    document.title=`${t('page_title')}${t('policty')}`;
    window.scrollTo(0,0)

  },[selectedLanguage])

    return (
        <div className="Product_page">
          <Head title={t('Using_role')} poster={contactPoster} navshow={navshow} />
          <Container>
          <TermsMain />
          </Container>
          <div className="product_Brand">
            <Brand />
          </div>
          <div className="triangle_control foot">
              <div className="triangle" />
            </div>
            <Footer />
        </div>  )
}

export default TermsPage