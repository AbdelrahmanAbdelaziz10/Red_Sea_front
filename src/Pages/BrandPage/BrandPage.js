import React, { useContext } from "react";

import AllBrand from "./AllBrand";
import { Container } from "react-bootstrap";
import { ContextLang } from "../../App";
import Footer from "./../../Components/Footer/Footer";
import Head from "../../Components/Head/Head";
import Products from "../../Components/Products/Products";
import contactPoster from "../../images/company 5.jpg";
import { useTranslation } from "react-i18next";

const BrandPage = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage } = useContext(ContextLang);
  return (
    <div className="Product_page">
      <Head title={t("brand_title")} poster={contactPoster} />
      <Container className="brands">
        <AllBrand selectedLanguage={selectedLanguage} />
      </Container>
      <div className="brandpage_product m-right mt-3">
        <Products title={t("brand_product_title")} />
      </div>
    </div>
  );
};
export default BrandPage;