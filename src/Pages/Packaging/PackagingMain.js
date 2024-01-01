import "../PrivacyPolicy/PoliceMainComponent/policeconant.css";
import { Container, Row } from "react-bootstrap";
import React from "react";
import Title from "../../Components/Title/Title";
import useFetch from "../../hooks/useFeatch";

const PackagingMain = ({title}) => {
  const {data:packaging,loading}=useFetch(`/api/v1/packaging`);

  return (
    <section className="product_container">
      <div className="product">
        <div className="prod_title margin_right m_right pt-4">
          <Title title={title} pragraph="" />
        </div>
        <Container className="zahra_container position-relative">
          <Row className="d-flex justify-content-center mt-5 pb-lg-2 pb-md-2 me-lg-5 me-md-5">
            <div className="position-relative packaging_height">
              <div className="triangle_control zahra-page-triangle">
                <div className="triangle" />
              </div>
              <div className="triangle_control zahra-page-triangle zahra-page-triangle-bg ">
                <div className="triangle" />
              </div>
              <div className="z-img">
              </div>
            </div>
            <p >
            {loading&& <div>Loading ....</div>}
            {packaging&&packaging[0]?.description_ar}
            </p>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default PackagingMain;
