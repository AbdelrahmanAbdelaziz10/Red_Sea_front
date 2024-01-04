import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AboutMain from "./AboutMain/AboutMain";
import Brand from "../../Components/Brand/Brand";
import { Container } from "react-bootstrap";
import { ContextLang } from "../../App";
import Footer from "../../Components/Footer/Footer";
import Head from "../../Components/Head/Head";
import Products from "../../Components/Products/Products";
import contactPoster from "../../images/company 3.jpg";
import ClimbingBoxLoader  from "react-spinners/ClipLoader";

const AboutPage = () => {
  const { selectedLanguage } = useContext(ContextLang);
  const { t, i18n } = useTranslation();
  const [loading, setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  return (
    <>
        <div className="Product_page About">
      <Head title={t("about")} poster={contactPoster} />
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

    </div>
    </>

  );
};

export default AboutPage;
