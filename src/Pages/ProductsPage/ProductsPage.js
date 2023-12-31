import React from "react";
import Footer from "./../../Components/Footer/Footer";
import Products from "../../Components/Products/Products";
import Brand from "./../../Components/Brand/Brand";
import Head from "../../Components/Head/Head";
import contactPoster from "../../images/company 6.jpg";
import Product from './../../Components/ProductsComponent/Product/Product';
import { Container } from "react-bootstrap";

const ProductsPage = () => {
  return (
    <div className="Product_page">
      <Head title="منتجاتنا" poster={contactPoster} />
      <Container>
      <Product />
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

export default ProductsPage;
