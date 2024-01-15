

import "./Navbar.css";

import React, { useContext, useEffect, useState, useTransition } from "react";

import { CgMenuLeft } from "react-icons/cg";
import { ContextLang } from "../../App";
import { IoCall } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import Product from "./../ProductsComponent/Product/Product";
import { Row } from "react-bootstrap";
import logo from "../../images/redsea logo.png";
import useFetch from "../../hooks/useFeatch";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NavBar = ({navshow}) => {
  const [shownav, setShownav] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  const location = useLocation();
  const { data: sub } = useFetch("/api/v1/sub-categories");
  const { data: product } = useFetch("/api/v1/products");

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };
// console.log(navshow)
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {shownav && (
        <div className="fixed">
          <div
            className="fixed_overlay"
            onClick={() => {
              setShownav(false);
            }}
          />
          <IoCloseSharp
            className="exit_icon"
            onClick={() => {
              setShownav(false);
            }}
          />
          <div className="list_container">
            <div className="list_title mb-4">
              <h3>{t("nav_title")}</h3>
            </div>
            <ul className="model">
              <li className="pt-2 ">
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
              <li className="">
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
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item ">
                  <Link className="accordion-header  ">
                    <button
                      className="accordion-button collapsed "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {t("product")}
                    </button>
                  </Link>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    {sub &&
                      sub.map((sub) => {
                        return (
                          <li className="dropmenu drop_title">
                            <p>
                              {selectedLanguage == "ar"
                                ? sub.name_ar
                                : sub.name_en}
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
                                        {selectedLanguage === "ar"
                                          ? pro.name_ar
                                          : pro.name_en}
                                      </Link>
                                    ) : null}
                                  </>
                                );
                              })}
                          </li>
                        );
                      })}{" "}
                    {/* <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div> */}
                  </div>
                </div>
              </div>

              <li className="">
                <Link
                  className={`${
                    location.pathname === "/" ? "active" : ""
                  } nav-link`}
                  aria-current="page"
                  to="/brand"
                >
                  {t("brand")}
                </Link>
              </li>
              <li className="">
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
              <li className=" ">
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
        </div>
      )}

      <Row className="pt-3 contact">
        <ul className="d-flex justify-content-start contact_list">
          <li>
            <Link to="mailto:info@rsdyemen.com" target="_blank">
              info@rsdyemen.com
              <IoIosMail className="contact_icon me-1" />
            </Link>
          </li>
          <li>
            <Link to="tel:04218294" target="_blank">
              04218294
              <IoCall className="contact_icon me-1" />
            </Link>
          </li>
        </ul>
      </Row>
      <nav
        className={navshow === "true"? `navbar navbar-expand-lg  mx-lg-5 justify-content-between ${
          scrolling ? "scrolled_navbar" : ""
        }`:`navbar opacity_0 navbar-expand-lg  mx-lg-5 justify-content-between ${
          scrolling ? "scrolled_navbar" : ""
        }`}
      >
        <button
          className="navbar-toggler menu"
          type="button"
          onClick={() => setShownav(true)}
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
                            {selectedLanguage === "ar"
                              ? sub.name_ar
                              : sub.name_en}
                          </p>
                          {product &&
                            product.map((pro) => {
                              return (
                                <>
                                  {sub.name_ar === pro.sub_category_name_ar ? (
                                    <Link
                                      className="dropdown-item product_title"
                                      to={`/products/${pro.id}`}
                                      activeclassName="active"
                                    >
                                      {selectedLanguage === "ar"
                                        ? pro.name_ar
                                        : pro.name_en}
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
