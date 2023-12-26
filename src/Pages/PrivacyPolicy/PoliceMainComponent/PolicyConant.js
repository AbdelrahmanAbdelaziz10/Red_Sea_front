import React from 'react'
import './policeconant.css'
import Title from '../../../Components/Title/Title'
import { Container, Row } from 'react-bootstrap'
const PolicyConant = () => {
  return (
    <section className='product_container  '>
    <div className='product'>
    <div className='prod_title m_right pt-4'>
    <Title title='سياسة الخصوصية' pragraph='' />

    </div>
    <Container className=''>
        <Row className='d-flex justify-content-center mt-5 pb-5 me-5'>
        <p className='policy_paragraph text-center'>
        شركة البحر الاحمر للمنظفات المحدودة أنشأت هذا الموقع لتوفير المعلومات عن الشركة ومنتجاتها وعرضها للمستخدمين.<br/>
        محتفظ شركة البحر الاحمر بالحق في اجراء بعض الاحيان تغيرات علي سياسة الخصوصية الخاصة بها وسيتم مشر التحديثات علي الموقع.<br/>
        نعترف بأهمية حماية خصوصية المعلومات الشخصية. لذلك، وضعت عليه سياسات صارمة والتدابير الأمنية لحماية المعلومات الخاصة بك.<br/>
        اذا تم اعطاء المعلومات الشخصية الخاصه بك، فان الشركة سوف تستخدم هذه المعلومات لتسجيلك مع موقعها الالكتروني وادارة خدمات <br/>
        موقعه علي الانترنت. نستخدم معلوماتك فقط لمراجعة أداء الشركة وتحسين خدمتها.<br/>
        اذا كنت لا تزال تتصفح الموقع، فانك توافق علي الامتثال لشروط سياسة الاستخدام.<br/>

        </p>
        </Row>
    </Container>
    </div>
    

    </section>

  )
}

export default PolicyConant