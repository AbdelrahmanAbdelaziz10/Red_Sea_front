import "./Footer.css";
import { Col, Container } from "react-bootstrap";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import footerLogo from "../../images/logo.png";
import useFetch from "./../../hooks/useFeatch";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../../App";
const Footer = () => {
  const navigate = useNavigate();
  const { selectedLanguage } = useContext(ContextLang);
  const { t, i18n } = useTranslation();
  const { data: setting } = useFetch(`/api/v1/website/setting`);
  const { data: product, loading } = useFetch(`/api/v1/products`);
  return (
    <footer className="footer py-4">
      <Container>
        <div className="row mb-5">
          <Col xs="5" lg="3" md="4" sm="5" className="company small_call">
            <h5>{t("title")}</h5>
            <ul className="list1">
              <li className="d-flex">
                <div className="triangle me-1 mt-md-2 ms-md-1" />
                <Link to="/">{t("home")}</Link>
              </li>
              <li className="d-flex">
                <div className="triangle me-1 mt-md-2  ms-md-1" />
                <Link to="/about">{t("about")}</Link>
              </li>
              <li className="d-flex">
                <div className="triangle me-1 mt-md-2  ms-md-1" />
                <Link to="/brand"> {t("brand")}</Link>
              </li>
              <li className="d-flex">
                <div className="triangle me-1 mt-md-2  ms-md-1" />
                <Link to="/brand"> {t("packaging")}</Link>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" sm="7" xs="7" className="company">
            <h5>{t("product")}</h5>
            <ul className="list1">
              {product
                ? product.map((product) => {
                    return (
                      <li
                        onClick={() => {
                          navigate(`/products/${product.id}`);
                        }}
                        className="d-flex"
                        key={product?.id}
                      >
                        <div className="triangle me-2 mt-md-2 ms-md-2" />
                        {product && selectedLanguage === "ar"
                          ? product.name_ar
                          : product.name_en}

                      </li>
                    );
                  })
                : null}
            </ul>
          </Col>
          <Col lg="4" className="company ">
            <h5>{t("contact")}</h5>
            <ul>
              <li className="d-flex">
                <div className="triangle ml-3 me-2 mt-md-2 ms-md-2" />
                {t("footer_title")} :{" "}
                {setting && selectedLanguage === "ar"
                  ? setting[0]?.address
                  : "The Republic of Yemen - Taiz - Al-Hawban"}
              </li>
              <li className="d-flex">
                <div className="triangle ml-3 mt-2 me-2 mt-md-2 ms-md-2" />
                {t("footer_phone")} : {setting && setting[0]?.phone}
              </li>
              <li className="d-flex">
                <div className="triangle ml-3 mt-2 me-2 mt-md-2 ms-md-2" />
                {t("footer_fax")} : {setting && setting[0]?.fax}
              </li>
              <li className="d-flex">
                <div className="triangle ml-3 mt-2 me-2 mt-md-2 ms-md-2" />
                {t("footer_email")} : {setting && setting[0]?.email}
              </li>
              <li className="d-flex">
                <div className="triangle ml-3 mt-2 me-2 mt-md-2 ms-md-2" />
                {t("footer_mailbox")} : {setting && setting[0]?.mail_box}
              </li>
            </ul>
          </Col>
        </div>
        <div className="row">
          <Col lg="6" md="9" sm="12" xs="12" className="col lg-6 md-12">
            <ul className="d-flex privity_list">
              <li className="d-flex policty">
                <div className="triangle mt-2 me-2 mt-md-2 ms-md-2 " />
                <Link to="/privacy_policy" className="link">
                  {t("policty")}
                </Link>
              </li>
              <li className="d-flex policty">
                <div className="triangle mt-2 me-2 mt-md-2 ms-md-2" />
                <Link to="/terms_using" className="link">
                  {t("Using_role")}
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="">
            <ul className="d-flex justify-content-end Social_icon">
              <li>
                <Link to={setting&&setting[0]?.youtube} target="_blank">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link to={setting&&setting[0]?.facebook} target="_blank">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to={setting&&setting[0]?.instagram} target="_blank" className="">
                  <FaInstagram className="instagram_icon" />
                </Link>
              </li>
            </ul>
          </Col>
        </div>
        <div className="line" />
        <div className="row footer_tola justify-content-between ">
          <Col lg="10" md="12" className="mt-4 footer-end">
            <p className="me-4 mb-md-4">{t("footer_p")}</p>
          </Col>
          <Col lg="2" md="12" className="mt-2 left footer-end mt-md-4">
            <p className="pe-1">{t("design")}</p>
            <div className="footer_logo">
              <img src={footerLogo} alt="company_logo" />
            </div>
          </Col>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
