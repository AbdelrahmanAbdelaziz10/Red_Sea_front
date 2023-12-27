import React from 'react'
import './contactmain.css';
import Title from '../../../Components/Title/Title';
import { Col, Container, Row } from 'react-bootstrap';
import Form from '../../../Components/Form/Form';
export const ContacMain = () => {
  return (
    <section className=''>
    <div className='contact'>
    <div className='contact_title pt-4'>
    <Title title='تواصل معنا' pragraph='لا تتردد في الاستفسار أو الاتصال بنا باستخدام النموذج أدناه.' />
</div>
        <Row className='d-flex justify-content-center '>
        <Col lg='10'>
        <Form />

        </Col>
        </Row>
    </div>
    

    </section>
  )
}
