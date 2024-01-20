import "../PrivacyPolicy/PoliceMainComponent/policeconant.css";

import { Container, Row } from "react-bootstrap";
import React, { useContext } from "react";

import { ContextLang } from "../../App";
import Title from "../../Components/Title/Title";
import Triangle from "../../Components/Triangle/Triangle";
import useFetch from "../../hooks/useFeatch";

const PackagingMain = ({ title }) => {
  const { selectedLanguage } = useContext(ContextLang);
  const { data: packaging, loading } = useFetch("/api/v1/packaging");

  return (
    <section className="product_container packaging">
      <div className="product">
        <div className="prod_title margin_right m_right pt-4">
          <Title title={title} pragraph="" />
        </div>
        <Row className="d-flex justify-content-center mt-5 pb-lg-2 pb-md-2 me-lg-5 me-md-5">
          <div className="position-relative packaging_height">
            <div className="triangle-control-com">
              <Triangle backgroundImage="" width={"28rem"} height={"30rem"} />
              <Triangle
                backgroundImage={`https://dashboard.rsdyemen.com/${
                  packaging && packaging[0]?.image
                }`}
                width={"29rem"}
                height={"30rem"}
              />
            </div>
          </div>
          <p
            className="about_prag"
            dangerouslySetInnerHTML={{
              __html:
                packaging && selectedLanguage === "ar"
                  ? packaging[0]?.description_ar
                  : packaging[0]?.description_en,
            }}
          />
        </Row>
      </div>
    </section>
  );
};

export default PackagingMain;
