import React, { useContext, useEffect, useState } from "react";

import Brand from "../../Components/Brand/Brand";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Head from "../../Components/Head/Head";
import PolicyConant from "./PoliceMainComponent/PolicyConant";
import axios from "axios";
import contactPoster from "../../images/company 9.jpg";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../../App";

const PolicyPage = ({navshow}) => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage } = useContext(ContextLang);

  useEffect(() => {
    document.title = `${t("page_title")}${t("policty")}`;
  }, [selectedLanguage]);

  return (
    <div className="Product_page">
      <Head title={t("policty")} poster={contactPoster} navshow={navshow} />
      <Container>
        <PolicyConant title={t("policty")} />
      </Container>
      <div className="product_Brand">
        <Brand />
      </div>
      <div className="triangle_control foot">
              <div className="triangle" />
            </div>
            <Footer />
    </div>
  );
};

export default PolicyPage;
