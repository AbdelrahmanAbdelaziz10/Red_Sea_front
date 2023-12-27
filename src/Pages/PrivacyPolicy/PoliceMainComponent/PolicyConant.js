import "./policeconant.css";
import { Container, Row } from "react-bootstrap";
import React from "react";
import Title from "../../../Components/Title/Title";

const PolicyConant = ({title}) => {
  return (
    <section className="product_container">
      <div className="product">
        <div className="prod_title  m_right pt-4">
          <Title title={title} pragraph="" />
        </div>
        <Container className="position-relative">
          <Row className="d-flex justify-content-center mt-5 pb-2 me-5">
            <p className='policy_paragraph text-center'>
            شركة البحر الاحمر للمنظفات المحدودة أنشأت هذا الموقع لتوفير المعلومات عن الشركة ومنتجاتها وعرضها للمستخدمين.<br/>
            نحتفظ شركة البحر الاحمر بالحق في اجراء بعض الأحيان تغيرات علي سياسة الخصوصية الخاصة بها وسيتم نشر التحديثات علي الموقع.<br/>
            نتعرف بأهمية حماية خصوصية المعلومات الشخصية. لذلك، وضعت عليه سياسات صارمة والتدابير الأمنية لحماية المعلومات الخاصة بك.<br/>
            اذا تم اعطاء المعلومات الشخصية الخاصة بك، فان الشركة سوف تستخدم هذه المعلومات لتسجيلك مع موقعها الالكتروني وادارى خدمات<br/>
            موقعه علي الانترنت. نستخدم معلوماتك فقط لمراجعة أداة الشركة وتحسين خدمتها.<br/>
            اذا كنت لا تزال تتصفح الموقع، فانك توافق علي الامتثال لشروط سياسة الخصوصية
            </p>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default PolicyConant;
