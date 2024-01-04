import React, { useContext, useEffect, useState } from 'react'
import Title from '../../../Components/Title/Title'
import { Container, Row } from 'react-bootstrap';
import '../../PrivacyPolicy/PoliceMainComponent/policeconant.css';
import useFetch from '../../../hooks/useFeatch';
import { useTranslation } from 'react-i18next';
import { ContextLang } from '../../../App';

const TermsMain = () => {
    const{data:terms,loading}=useFetch(`/api/v1/terms`)
    const { t, i18n } = useTranslation();
    const {selectedLanguage}=useContext(ContextLang)

    return (
        <section className='product_container  '>
        <div className='product'>
        <div className='prod_title m_right pt-4'>
        <Title title={t('Using_role')} pragraph='' />
    
        </div>
        <Container className=''>
            <Row className='d-flex justify-content-center m-mall-screen mt-5 pb-4 mx-lg-5 mx-md-4 px-lg-5'>
            <p className='policy_paragraph text-center'>
            {loading && <div>Loading...</div>}
            {terms && selectedLanguage==='ar'? terms[0]?.terms_ar : terms[0]?.terms_en}

            </p>
            <p className='policy_paragraph text-center '>
            <span className='text-center'>{t('publish')}</span><br/>
            {terms &&  selectedLanguage==='ar'? terms[0]?.copyright_ar : terms[0]?.copyright_en}
            </p>
            <p className='policy_paragraph text-center '>
            {terms &&  selectedLanguage==='ar'? terms[0]?.special_marks_ar : terms[0]?.special_marks_en}
            </p>
            </Row>
        </Container>
        </div>
        
    
        </section>
    
      )
}

export default TermsMain