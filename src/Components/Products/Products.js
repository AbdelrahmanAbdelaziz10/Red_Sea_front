import React from "react";
import "./Productes.css";
import { Container, Row } from "react-bootstrap";
import Sliders from "../Sliders/Sliders";
import Title from "../Title/Title";
import { useTranslation } from 'react-i18next';
const Products = ({title,selectedLanguage}) => {
  const { t, i18n } = useTranslation();

  return (
    <section className="product mt-5 ">
      <Container>
      <div className='prod_title pt-4'>
        <Title title={title} pragraph={t('product_p')} />

        </div>
        <Row>
          <Sliders selectedLanguage={selectedLanguage}/>
        </Row>
      </Container>
    </section>
  );
};

export default Products;