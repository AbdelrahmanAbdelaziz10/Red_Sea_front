import "./AllBrand.css";

import { Card, Col, Container, Row } from "react-bootstrap";

import React from "react";
import Title from "../../Components/Title/Title";
import { motion } from "framer-motion";
import useFetch from "../../hooks/useFeatch";
import { useTranslation } from "react-i18next";

const AllBrand = ({ selectedLanguage }) => {
  const { t, i18n } = useTranslation();
  const { data: brand } = useFetch(`/api/v1/brands`);

  return (
    <section className="product_container  ">
      <div className="product ">
        <div className="prod_title ml_right pt-5">
          <Title className="" title={t("brand")} pragraph={t("brand_p")} />
        </div>
        <Container className="">
          <Row className="d-flex justify-content-center align-items-start pb-5 mt-md-4 brand_row">
            {brand ? (
              brand.map((brand, i) => (
                <Col
                  key={brand.id}
                  lg="4"
                  md="4"
                  sm="12"
                  xs="12"
                  className="d-flex justify-content-start flex_col mt-4 my-3"
                >
                  <motion.div
                    initial={{ opacity: 0, translatX: -50, translateY: -50 }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    trannsition={{ duration: 0.3, delay: i * 2 }}
                    className="card brand_card"
                  >
                    <div className="img">
                      <img
                        src={`https://beautyproducts.website/${brand.brand}`}
                        alt=""
                      />
                    </div>
                  </motion.div>
                  <p
                    className="product_description mt-2"
                    dangerouslySetInnerHTML={{
                      __html:
                        selectedLanguage === "ar"
                          ? brand.description_ar.slice(0, 70)
                          : brand.description_en.slice(0, 70),
                    }}
                  />
                </Col>
              ))
            ) : (
              <h2 className="text-center">Not have any Brand yet</h2>
            )}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default AllBrand;
