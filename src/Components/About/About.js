import React from "react";
import { Container, Row } from "react-bootstrap";
import "./About.css";
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="about pb-5 mb-5">
      <Container>
        <Row className="mb-5 pb-5">
          <div className="map_text mt-4 ">
            <h5>{t("aboutCompany")}</h5>
            <div className="triangle_control">
              <div className="triangle" />
            </div>
            <div className="text-center">
              <p className="text-center">{t("about_title")}</p>
              <p className="about_prag">{t("about_p")}</p>
              <button className="btnn mt-2"> {t("about_btn")}</button>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
