import React from "react";
import "./Footer.css";
import { Col, Container } from "react-bootstrap";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import footerLogo from "../../images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <div className="row mb-5">
          <Col lg="3" className="company">
            <h5>عن الشركة</h5>
            <ul>
              <li className="d-flex">
                <div className="triangle mt-2 me-2" />
                <a href="">الرئيسية</a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2" /> <a href="">من نحن</a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2" />{" "}
                <a href="">علامتنا التجارية</a>
              </li>
            </ul>
          </Col>
          <Col lg="3" className="company">
            <h5>منتجاتنا</h5>
            <ul>
              <li className="d-flex">
                <div className="triangle mt-2 me-2" />
                <a href="">صابون زهرة</a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2" /> <a href="">صابون شروق</a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2" />{" "}
                <a href="">صابون ابوللو</a>
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2" /> <a href="">صابون توب</a>
              </li>
            </ul>
          </Col>
          <Col lg="4" className="company">
            <h5>تواصل معنا</h5>
            <ul>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 ms-2" />
                العنوان : الجمهورية اليمنية- تعز
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 ms-2" />
                هاتف : +9674218294
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 ms-2" />
                فاكس : 04218208
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 ms-2" />
                البريد الالكتروني: info@rsdyemen
              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 ms-2" />
                صندوق البريد : P.O.Box5499 - Taiz-Yemen
              </li>
            </ul>
          </Col>
        </div>
        <div className="row">
          <div className="col lg-6">
            <ul className="d-flex privity_list">
              <li className="d-flex ">
              <div className="triangle mt-2 me-1 " />
              <Link to='/privacy_policy' className="link">
                سياسية الخصوصية
              </Link>

              </li>
              <li className="d-flex">
                <div className="triangle mt-2 me-2 ms-2" />
                <Link to='/terms_using' className="link">
                شروط الاستخدام
                </Link>

              </li>
            </ul>
          </div>
          <div className="col lg-6">
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
          </div>
        </div>
        <div className="line" />
        <div className="row justify-content-between ">
          <Col lg="10" className="mt-4">
            <h6 className="me-4">
              جميع الحقوق محفوظة لشركة البحر الاحمر للمنظفات المحدودة
            </h6>
          </Col>
          <Col lg="2" className="mt-2 left">
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
