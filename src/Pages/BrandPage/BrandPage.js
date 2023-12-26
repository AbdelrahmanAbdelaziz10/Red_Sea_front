
import React from "react";
import Footer from "./../../Components/Footer/Footer";
import Brand from "./../../Components/Brand/Brand";
import Head from "../../Components/Head/Head";
import contactPoster from "../../images/واجهة-شركة-البحر-الاحمر4.jpg";
import Product from './../../Components/ProductsComponent/Product/Product';
import { Container } from "react-bootstrap";
import AllBrand from "./AllBrand";
import Products from "../../Components/Products/Products";

const BrandPage = () => {
    return (
        <div className="Product_page">
          <Head title="العلامات التجارية" poster={contactPoster} />
          <Container>
          <AllBrand />
          </Container>
          <div className='brandpage_product mt-3'>
    <Products />
    </div>
          <div className="triangle_control">
            <div className="triangle" />
          </div>
          <Footer />
        </div>
      );
}
export default BrandPage
