import "./contactmain.css";

import { Col, Container, Row } from "react-bootstrap";

import Form from "../../../Components/Form/Form";
import React from "react";
import Title from "../../../Components/Title/Title";

export const ContacMain = () => {
  return (
    <section className="">
      <div className="contact-page">
        <div className="contact_title pt-4">
          <Title
            title="تواصل معنا"
            pragraph="لا تتردد في الاستفسار أو الاتصال بنا باستخدام النموذج أدناه."
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
