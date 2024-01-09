import "./contactmain.css";

import { Col, Row } from "react-bootstrap";

import Form from "../../../Components/Form/Form";
import React from "react";
import Title from "../../../Components/Title/Title";
import { useTranslation } from 'react-i18next';
export const ContacMain = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="">
      <div className="contact-page product">
        <div className="contact_title pt-4">
          <Title
            title={t('contact')}
            pragraph={t('contact_head')}
          />
        </div>
        <Row className="d-flex justify-content-center ">
          <Col lg="10" md='10' sm='12' xs='12'>
            <Form />
          </Col>
        </Row>
      </div>
    </section>
  );
};
