import React, { useContext, useEffect, useState } from "react";

import AboutMain from "./AboutMain/AboutMain";
import Brand from "../../Components/Brand/Brand";
import ClimbingBoxLoader  from "react-spinners/ClipLoader";
import { Container } from "react-bootstrap";
import { ContextLang } from "../../App";
import Footer from "../../Components/Footer/Footer";
import Head from "../../Components/Head/Head";
import Products from "../../Components/Products/Products";
import contactPoster from "../../images/company 3.jpg";
import { useTranslation } from "react-i18next";

const AboutPage = ({navshow}) => {
  const { selectedLanguage } = useContext(ContextLang);
  const { t, i18n } = useTranslation();
  useEffect(()=>{
    document.title=`${t('page_title')}${t('about')}`;
  },[selectedLanguage])

  return (
    <>
        <div className="Product_page About">
      <Head title={t("about")} poster={contactPoster} navshow={navshow}/>
      <Container>
        <AboutMain
          title={t("brand_product_title")}
          selectedLanguage={selectedLanguage}
        />
      </Container>
      <div className="brandpage_product m-right mt-3">
        <Products title={t("brand_product_title")} />
      </div>
      <div className="product_Brand">
        <Brand />
      </div>
      <div className="triangle_control foot">
              <div className="triangle" />
            </div>
            <Footer />

    </div>
    </>

  );
};

export default AboutPage;
