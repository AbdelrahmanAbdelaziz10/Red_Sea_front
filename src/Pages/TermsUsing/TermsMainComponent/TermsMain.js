import React, { useEffect, useState } from 'react'
import Title from '../../../Components/Title/Title'
import { Container, Row } from 'react-bootstrap';
import '../../PrivacyPolicy/PoliceMainComponent/policeconant.css';
import useFetch from '../../../hooks/useFeatch';


const TermsMain = () => {
    const{data:terms,loading}=useFetch(`/api/v1/terms`)


    return (
        <section className='product_container  '>
        <div className='product'>
        <div className='prod_title m_right pt-4'>
        <Title title='شروط الاستخدام' pragraph='' />
    
        </div>
        <Container className=''>
            <Row className='d-flex justify-content-center m-mall-screen mt-5 pb-4 mx-lg-5 mx-md-4 px-lg-5'>
            <p className='policy_paragraph text-center'>
            {loading && <div>Loading...</div>}
            {terms && terms[0]?.terms_ar}

            </p>
            <p className='policy_paragraph text-center '>
            <span className='text-center'>حقوق النشر</span><br/>
            {terms && terms[0]?.copyright_ar}
            </p>
            <p className='policy_paragraph text-center '>
            {terms && terms[0]?.special_marks_ar}
            </p>
            </Row>
        </Container>
        </div>
        
    
        </section>
    
      )
}

export default TermsMain