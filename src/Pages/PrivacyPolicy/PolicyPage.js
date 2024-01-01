import React, { useEffect, useState } from "react";

import Brand from "../../Components/Brand/Brand";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer";
import Head from "../../Components/Head/Head";
import PolicyConant from "./PoliceMainComponent/PolicyConant";
import axios from "axios";
import contactPoster from "../../images/company 9.jpg";


const PolicyPage = () => {
  return (
    <div className="Product_page">
      <Head title="سياسة الخصوصية" poster={contactPoster} />
      <Container>
        <PolicyConant
          title="سياسة الخصوصية"
        />
      </Container>
      <div className="product_Brand">
        <Brand />
      </div>
      <div className="triangle_control">
        <div className="triangle" />
      </div>
      <Footer />
    </div>
  );
};

export default PolicyPage;