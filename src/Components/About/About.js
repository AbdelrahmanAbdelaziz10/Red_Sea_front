import React from "react";
import { Container, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <section className="about pb-5 mb-5">
      <Container>
        <Row className="mb-5 pb-5">
          <div className="map_text mt-4 ">
            <h5> عن الشركة</h5>
            <div className="triangle_control">
              <div className="triangle" />
            </div>
            <div className="text-center">
              <p className="text-center">ثلاثة عقود من الثقة </p>
              <p className="about_prag">
                تبرز شركة البحر الاحمر للمنظفات كشركة عملاقة في مجال تصنيع
                مساحيق التنظيف بعد ان فرضت نفسها بقوة .... وهي بمسيرتها الناجحة
                منذ تاسيسها في عام 1984 م لم تكن بمنأي عن مواكبة التطورات فقد
                وسعت من طاقتها الانتاجية علي مرحلتين وذلك باستخدام اليتها
                الانتاجية لمواكبة التطورات والتوسعات في الأسواق لتلبي الاحتياجات
                الداخليه والخارجية ويتم تعبئة المنتجات وفق أحدث الات التعبئة
                العالية
              </p>
              <button className="btnn mt-2">روية المزيد</button>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
