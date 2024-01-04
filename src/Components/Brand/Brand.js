import "./Brand.css";

import { Card, Col, Container, Row } from "react-bootstrap";

import React from "react";
import Title from "../Title/Title";
import useFetch from "./../../hooks/useFeatch";
import { useTranslation } from 'react-i18next';
const Brand = () => {
  const { t, i18n } = useTranslation();
  const { data: brands } = useFetch("/api/v1/brands");
  return (
    <section className="brand mb-md-5">
      <Container>
        <Row className="mb-3 mp-right ">
          <Title
            title={t('brands')}
            pragraph={t('brand_p')}  
          />
        </Row>
        <Row className="mb-5 pb-md-4 mb-md-5">
          {brands &&
            brands.slice(0, 4).map((brand) => (
              <Col
                key={brand.id}
                xs="6"
                lg="3"
                md="3"
                sm="6"
                className="d-flex col_card justify-content-center"
              >
                <Card className="brand_card pb-2 mb-2">
                  <img
                    src={`https://beautyproducts.website/${brand.brand}`}
                    alt={brand.title_en}
                  />
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Brand;
