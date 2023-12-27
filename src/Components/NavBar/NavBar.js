import "./Navbar.css";

import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import React from "react";
import { Row } from "react-bootstrap";
import logo from "../../images/شعار-البحر-الاحمر.png";

export const NavBar = () => {
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
      <nav className="navbar navbar-expand-lg px-3 mx-5 ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                من نحن
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="/products"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                منتجاتنا
              </Link>
              <ul class="dropdown-menu">
              <li className="dropmenu">
                  <Link class="dropdown-item" to="/products">
                  جميع المنتجات
                  </Link>
                </li>
                <li className="dropmenu">
                  <Link class="dropdown-item" to="/products/elzahra">
                    منتجات الزهرة
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="/products"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              العلامات التجارية
              </Link>
              <ul class="dropdown-menu">
              <li className="dropmenu">
                  <Link class="dropdown-item" to="/brand">
                  جميع العلامات
                  </Link>
                </li>
                <li className="dropmenu">
                  <Link class="dropdown-item" to="/">
                    منتجات الزهرة
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/packaging">
                التعبئة والتغليف
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">
                التواصل
              </Link>
            </li>
            <li className="nav-item pe-5 me-3">
              <Link className="nav-link active" aria-current="page" to="/">
                <MdLanguage className="language_icon" /> English
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="#">
          <img src={logo} alt="" className="logo_nav" />
        </Link>
      </nav>
    </>
  );
};
