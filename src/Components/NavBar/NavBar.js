import "./Navbar.css";

import React, { useContext, useState, useTransition } from "react";
import { MdLanguage } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { ContextLang } from "../../App";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import logo from "../../images/redsea logo.png";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetch from "../../hooks/useFeatch";
import Product from "./../ProductsComponent/Product/Product";

export const NavBar = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  const location = useLocation();
  const { data: sub } = useFetch(`/api/v1/sub-categories`);
  const { data: product } = useFetch(`/api/v1/products`);

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Row className="pt-3 contact">
        <ul className="d-flex justify-content-start contact_list">
          <li>
            info@rsdyemen.com
            <IoIosMail className="contact_icon" />
          </li>
          <li>
            04218294
            <IoCall className="contact_icon" />
          </li>
        </ul>
      </Row>
      <nav className="navbar navbar-expand-lg  mx-lg-5 justify-content-between">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="menu">
            <CgMenuLeft />
          </span>
        </button>

        <div className="d-flex align-items-center navbar-items">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/" ? "active" : ""
                  } nav-link`}
                  aria-current="page"
                  to="/"
                >
                  {t("home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeclassName="active"
                  className={`${
                    location.pathname === "/about" ? "active" : ""
                  } nav-link`}
                  aria-current="page"
                  to="/about"
                >
                  {t("about")}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  activeclassName="active"
                  className={`${
                    location.pathname === "/products" ? "active" : ""
                  } nav-link dropdown-toggle`}
                  to="/products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("product")}
                </Link>
                <ul className="dropdown-menu px-5 dropdown_product">
                  <li className="dropmenu drop_title">
                  <p>
                    <Link
                      className="dropdown-item"
                      to="/products"
                      activeclassName="active"
                    >
                      {t("allproduct")}
                    </Link>
                    </p>
                  </li>
                  {sub &&
                    sub.map((sub) => {
                      return (
                        <li className="dropmenu drop_title">
                          <p>
                            {selectedLanguage == "ar"
                              ? sub.name_ar
                              : Product.name_en}
                          </p>
                          {product &&
                            product.map((pro) => {
                              return (
                                <>
                                  {sub.name_ar == pro.sub_category_name_ar ? (
                                    <Link
                                      className="dropdown-item product_title"
                                      to={`/products/${pro.id}`}
                                      activeclassName="active"
                                    >
                                      {selectedLanguage == "ar"
                                        ? pro.name_ar
                                        : pro.name_eny}
                                    </Link>
                                  ) : null}
                                </>
                              );
                            })}
                        </li>
                      );
                    })}
                </ul>
              </li>

              <li className="nav-item dropdown ">
                <Link
                  className={`${
                    location.pathname === "/brand" ? "active" : ""
                  } nav-link dropdown-toggle`}
                  to="/products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  activeclassName="active"
                >
                  {t("brand")}
                </Link>
                <ul className="dropdown-menu dropdown_brand">
                  <li className="dropmenu">
                    <Link
                      className="dropdown-item"
                      to="/brand"
                      activeclassName="active"
                    >
                      {t("brand")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`${
                    location.pathname === "/packaging" ? "active" : ""
                  } nav-link`}
                  aria-current="page"
                  to="/packaging"
                  activeclassName="active"
                >
                  {t("packaging")}
                </Link>
              </li>
              <li className="nav-item me-md-4">
                <Link
                  className={`${
                    location.pathname === "/contact" ? "active" : ""
                  } nav-link`}
                  aria-current="page"
                  to="/contact"
                  activeclassName="active"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-item pe-5 me-3">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                {selectedLanguage === "ar" ? (
                  <button
                    className="btn "
                    onClick={(e) => handleChangeLanguage("en")}
                  >
                    العربية <MdLanguage className="language_icon" />
                  </button>
                ) : (
                  <button
                    className="btn"
                    onClick={(e) => handleChangeLanguage("ar")}
                  >
                    English <MdLanguage className="language_icon" />
                  </button>
                )}
                {/* <select
                  id="languageSelect"
                  className="form-select"
                  value={selectedLanguage}
                  onChange={(e) => handleChangeLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="ar">العربية</option>
                </select> */}
              </li>
            </ul>
          </div>
        </div>

        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" className="logo_nav" />
        </Link>
      </nav>
    </>
  );
};
