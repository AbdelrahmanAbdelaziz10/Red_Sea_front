import "../PrivacyPolicy/PoliceMainComponent/policeconant.css";
import { Container, Row } from "react-bootstrap";
import React from "react";
import Title from "../../Components/Title/Title";

const PackagingMain = ({title}) => {
  return (
    <section className="product_container">
      <div className="product">
        <div className="prod_title margin_right m_right pt-4">
          <Title title={title} pragraph="" />
        </div>
        <Container className="zahra_container position-relative">
          <Row className="d-flex justify-content-center mt-5 pb-2 me-5">
            <div style={{ height: "25rem" }} className="position-relative">
              <div className="triangle_control zahra-page-triangle">
                <div className="triangle" />
              </div>
              <div className="triangle_control zahra-page-triangle zahra-page-triangle-bg ">
                <div className="triangle" />
              </div>
              <div className="z-img">
              </div>
            </div>
            <p>
              مع بداية العام 1998 م بدات الشركة بتنفيذ مشروع تصنيع المواد
              التعبئة والتغليف البلاستيكية البو يلثن لتكون معتمدة على نفسها
              بتصنيع جميع مواد التعبئة والتغليف بجميع اصنافها ومقاستها واحجامها
              المختلفة بدلا من استيرادها محليا او خارجيا والاتكفاء الذاتي ، حيث
              بدائت الشركة بتركيب خط انتاج المشمع وخط طباعة البلوثلين ومع مرور
              السنوات وزيادة كمية الإنتاجية وارتفاع طلب مواد التعبئة والتغليف
              قامت الشركة بتطوير وتحديث خط النتاج البلوثلين - في باظافة الة مشمع
              جديدة وكذاك اضافة آلة طباعة جديدة وحديثة وكذالك اظافة خط جديد في
              تطوير التي تعمل [ Lamination وتحديث وجودة مواد التعبئة والتغليف
              الذي يمثل في الة اللمنيشن والذي يعد حاليا من ارقى مواد التعبئة
              والتغليف ، BET,LLD طبقتين للف ولهذا استهانت الشركة بمنافسة جيع
              الأسواق المحلية والخارجية بتحسين المواد الخاصة بتعبئة وتغليف جميع
              منتجاتها
            </p>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default PackagingMain;
