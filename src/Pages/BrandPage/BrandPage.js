
import React from "react";
import Footer from "./../../Components/Footer/Footer";
import Head from "../../Components/Head/Head";
import contactPoster from "../../images/واجهة-شركة-البحر-الاحمر4.jpg";
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
          <div className='brandpage_product m-right mt-3'>
    <Products title='منتجات قد تعجبك'/>
    </div>
          <div className="triangle_control">
            <div className="triangle" />
          </div>
          <Footer />
        </div>
      );
}
export default BrandPage
