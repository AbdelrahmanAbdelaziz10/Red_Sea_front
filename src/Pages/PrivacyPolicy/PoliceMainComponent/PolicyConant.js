import "./policeconant.css";

import { Container, Row } from "react-bootstrap";

import React from "react";
import Title from "../../../Components/Title/Title";
import useFetch from './../../../hooks/useFeatch';

const PolicyConant = ({ title }) => {
  const { data: policy, loading } = useFetch(`/api/v1/policy`);

  return (
    <section className="product_container">
      <div className="product">
        <div className="prod_title  m_right pt-4">
          <Title title={title} pragraph="" />
        </div>
        <Container className="position-relative">
          <Row className="d-flex justify-content-center mt-5 pb-4 mx-5">
            <p className="policy_paragraph text-center mx-4">
              {loading && <div>Loading...</div>}
              {policy && policy[0]?.description_ar}
            </p>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default PolicyConant;