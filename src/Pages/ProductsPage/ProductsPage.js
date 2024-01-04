import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import Brand from "./../../Components/Brand/Brand";
import { Container } from "react-bootstrap";
import { ContextLang } from "../../App";
import Footer from "./../../Components/Footer/Footer";
import Head from "../../Components/Head/Head";
import Product from "./../../Components/ProductsComponent/Product/Product";
import contactPoster from "../../images/company 6.jpg";

const ProductsPage = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage } = useContext(ContextLang);

  return (
    <div className="Product_page">
      <Head title={t("product")} poster={contactPoster} />
      <Container className="product_container">
        <Product selectedLanguage={selectedLanguage} />
      </Container>
      <div className="product_Brand">
        <Brand />
      </div>
    </div>
  );
};

export default ProductsPage;
