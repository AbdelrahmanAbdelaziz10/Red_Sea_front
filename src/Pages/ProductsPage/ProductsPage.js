import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Brand from "./../../Components/Brand/Brand";
import { Container } from "react-bootstrap";
import { ContextLang } from "../../App";
import Footer from "./../../Components/Footer/Footer";
import Head from "../../Components/Head/Head";
import Product from "./../../Components/ProductsComponent/Product/Product";
import contactPoster from "../../images/company 6.jpg";
import { useState } from "react";

const ProductsPage = ({navshow,setNavshow}) => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage } = useContext(ContextLang);
  useEffect(()=>{
    document.title=`${t('page_title')}${t('product')}`;
  },[selectedLanguage])

  return (
    <div className="Product_page">
      <Head title={t("product")} poster={contactPoster} navshow={navshow}/>
      <Container className="product_container">
        <Product selectedLanguage={selectedLanguage}  setNavshow={setNavshow}/>
      </Container>
      <div className="product_Brand">
        <Brand />
      </div>
      <div className="triangle_control">
              <div className="triangle" />
            </div>
            <Footer />
    </div>
  );
};

export default ProductsPage;
