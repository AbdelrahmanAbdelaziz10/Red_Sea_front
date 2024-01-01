import React from "react";
import productImg1 from "../../images/topbrand.png";
import productImg2 from "../../images/zahra bacge.png";
import productImg3 from "../../images/abo lolologo.png";
import productImg4 from "../../images/Wildcatbrand.png";
import Title from "../../Components/Title/Title";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./AllBrand.css";
import useFetch from "../../hooks/useFeatch";

const cards = [
  {
    imageSrc: productImg1,
  },
  {
    imageSrc: productImg2,
  },
  {
    imageSrc: productImg3,
  },
  {
    imageSrc: productImg4,
  },
  {
    imageSrc: productImg1,
  },
  {
    imageSrc: productImg2,
  },
  {
    imageSrc: productImg3,
  },
  {
    imageSrc: productImg4,
  },
  {
    imageSrc: productImg1,
  },
];

const AllBrand = () => {
  const { data: brand } = useFetch(`/api/v1/brands`);

  return (
    <section className="product_container  ">
      <div className="product ">
        <div className="prod_title m_right pt-5">
          <Title
            className=""
            title="العلامات التجارية"
            pragraph="علامتنا التجارية في السوق المحلية والخارجية"
          />
        </div>
        <Container className="">
          <Row className="d-flex justify-content-center pb-5 me-5 mt-md-4 ">
            {brand !== [] ? (
              brand.map((brand) => (
                <Col
                  key={brand.id}
                  lg="4"
                  md="4"
                  sm="12"
                  xs="12"
                  className="d-flex justify-content-center flex_col mt-4 my-3"
                >
                  <Card className="brand_card">
                    <img
                      src={`https://beautyproducts.website/${brand.brand}`}
                      alt=""
                    />
                  </Card>
                  <p className="product_description mt-2">
                    {brand.description_ar}
                  </p>
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
