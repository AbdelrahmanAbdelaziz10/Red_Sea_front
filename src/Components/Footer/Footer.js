import "./Footer.css";

import { Col, Container } from "react-bootstrap";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import footerLogo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <div className="row mb-5">
          <Col xs="5" lg="3" md="4" sm="5" className="company">
            <h5>عن الشركة</h5>
            <ul>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 mt-md-3 ms-md-2" />
                <a href="/">الرئيسية</a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 mt-md-3  ms-md-2" />{" "}
                <a href="/about">من نحن</a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 mt-md-3  ms-md-2" />{" "}
                <a href="/brand">علامتنا التجارية</a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" sm="6" xs="6" className="company">
            <h5>منتجاتنا</h5>
            <ul>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 mt-md-3 ms-md-1" />
                <a href="">صابون زهرة</a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 mt-md-3 ms-md-1" />
                <a href="">صابون شروق</a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 mt-md-3 ms-md-1" />
                <a href="">صابون ابوللو</a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 mt-md-3 ms-md-1" />
                <a href="">صابون توب</a>
              </li>
            </ul>
          </Col>
          <Col lg="4" className="company ">
            <h5>تواصل معنا</h5>
            <ul>
              <li className="d-flex">
                <div className="triangle ml-3 mt-2 me-2 mt-md-3 ms-md-3" />
                العنوان : الجمهورية اليمنية- تعز
              </li>
              <li className="d-flex">
                <div className="triangle ml-3 mt-2 me-2 mt-md-3 ms-md-3" />
                هاتف : +9674218294
              </li>
              <li className="d-flex">
                <div className="triangle ml-3 mt-2 me-2 mt-md-3 ms-md-3" />
                فاكس : 04218208
              </li>
              <li className="d-flex">
                <div className="triangle ml-3 mt-2 me-2 mt-md-3 ms-md-3" />
                البريد الالكتروني: info@rsdyemen
              </li>
              <li className="d-flex">
                <div className="triangle ml-3 mt-2 me-2 mt-md-3 ms-md-3" />
                صندوق البريد : P.O.Box5499 - Taiz-Yemen
              </li>
            </ul>
          </Col>
        </div>
        <div className="row">
          <Col lg="6" md="9" sm="12" xs="12" className="col lg-6 md-12">
            <ul className="d-flex privity_list">
              <li className="d-flex ">
                <div className="triangle mt-2 me-2 mt-md-3 ms-md-3 " />
                <a href="/privacy_policy" className="link">
                  سياسية الخصوصية
                </a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 mt-md-3 ms-md-3" />
                <a href="/terms_using" className="link">
                  شروط الاستخدام
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12" className="">
            <ul className="d-flex justify-content-end Social_icon">
              <li>
                <a href="" target="_blank">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="" target="_blank" className="">
                  <FaInstagram className="instagram_icon" />
                </a>
              </li>
            </ul>
          </Col>
        </div>
        <div className="line" />
        <div className="row footer_tola justify-content-between ">
          <Col lg="10" md="12" className="mt-4 footer-end">
            <h6 className="me-4 mb-md-4">
              جميع الحقوق محفوظة لشركة البحر الاحمر للمنظفات المحدودة
            </h6>
          </Col>
          <Col lg="2" md="12" className="mt-2 left footer-end mt-md-4">
            <p className="pe-1">تصميم وبرمجة</p>
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
