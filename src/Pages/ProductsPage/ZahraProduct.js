import Brand from "./../../Components/Brand/Brand";
import { Container } from "react-bootstrap";
import Footer from "./../../Components/Footer/Footer";
import Head from "../../Components/Head/Head";
import PolicyConant from "../PrivacyPolicy/PoliceMainComponent/PolicyConant";
import ProductDeteils from "./ProductDeteils/ProductDeteils";
import Products from "../../Components/Products/Products";
import React from "react";
import contactPoster from "../../images/company 6.jpg";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFeatch";

const ZahraProduct = () => {
  const { productId } = useParams();
  const { data: productData, loading } = useFetch(`/api/v1/products/get-product?productID=${productId}`);

  return (
    <div className="Product_page Contact ">
      <Head title="منتجاتنا< منتج الزهراء" poster={contactPoster} />
      <Container>
        <ProductDeteils productData={productData[0]} loading={loading} />
      </Container>
      <div className="page_product m-right">
        <Products title="منتجات قد تعجبك" />
      </div>
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

export default ZahraProduct;