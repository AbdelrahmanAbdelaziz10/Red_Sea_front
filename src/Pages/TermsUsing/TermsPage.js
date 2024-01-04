import React from 'react'
import Head from '../../Components/Head/Head'
import { Container } from 'react-bootstrap'
import Brand from '../../Components/Brand/Brand'
import contactPoster from '../../images/company 9.jpg'
import TermsMain from './TermsMainComponent/TermsMain';
import { useTranslation } from 'react-i18next';
const TermsPage = () => {
  const { t, i18n } = useTranslation();
    return (
        <div className="Product_page">
          <Head title={t('Using_role')} poster={contactPoster} />
          <Container>
          <TermsMain />
          </Container>
          <div className="product_Brand">
            <Brand />
          </div>

        </div>  )
}

export default TermsPage