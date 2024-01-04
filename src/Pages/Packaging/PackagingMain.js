import "../PrivacyPolicy/PoliceMainComponent/policeconant.css";
import { Container, Row } from "react-bootstrap";
import React, { useContext } from "react";
import Title from "../../Components/Title/Title";
import useFetch from "../../hooks/useFeatch";
import { ContextLang } from "../../App";
import Triangle from "../../Components/Triangle/Triangle";

const PackagingMain = ({title}) => {
  const { selectedLanguage } = useContext(ContextLang);
  const {data:packaging,loading}=useFetch(`/api/v1/packaging`);

  return (
    <section className="product_container packaging">
      <div className="product">
        <div className="prod_title margin_right m_right pt-4">
          <Title title={title} pragraph="" />
        </div>
        <Container className="zahra_container position-relative">
          <Row className="d-flex justify-content-center mt-5 pb-lg-2 pb-md-2 me-lg-5 me-md-5">
            <div className="position-relative packaging_height">
            <div className="triangle-control-com">
              <Triangle backgroundImage="" width={"28rem"} height={"30rem"} />
              <Triangle
                backgroundImage={`https://beautyproducts.website/${packaging&& packaging[0]?.image}`}
                width={"29rem"}
                height={"30rem"}

                />
            </div>
            </div>
            <p >
            {loading&& <div>Loading ....</div>}
            {packaging&&selectedLanguage==='ar'?
            packaging[0]?.description_ar:packaging[0]?.description_en}
            </p>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default PackagingMain;
