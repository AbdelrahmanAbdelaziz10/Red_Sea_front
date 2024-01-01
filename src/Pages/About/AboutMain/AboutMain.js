import React from 'react'
import './aboutmain.css'
import AboutRight from '../../../Components/AboutComponent/AboutRight';
import AboutLeft from '../../../Components/AboutComponent/AboutLeft';
import useFetch from '../../../hooks/useFeatch';
import Medals from '../../../Components/AboutComponent/Medals';

const head1 ='ثلاثة عقود من الثقة';
const paragraph1="تبرز شركة البحر األحمر للمنظفات كشركة عمالقة في مجال تصنیع مساحیق التنظیف بعد أن فرضت نفسھا بقوة .... وھي بمسیرتھا       الناجحة منذو تأسیسھا في العام 1984 م لم تكن بمنأى عن مواكبة التطورات فقد وسعت من طاقتھا اإلنتاجیة على مرحلتین وذلك       باستحداث الیتھا اإلنتاجیة لمواكبة التطورات و التوسعات في األسواق لتلبي اإلحتیاجات الداخلیة والخارجیة ویتم تعبئة المنتجات وفق<br/>        أحدث اآلالت العالمية المتخصصة في مجال التعبئة"
const AboutMain = () => {

  const {data:about,loading}=useFetch(`/api/v1/about`)
  return (
    <section className="product_container ">
        <div className="product pb-4 about-us ">

    <AboutRight title='عن الشركة' head={about&&about[0]?.about_header_ar} description2=''
    aboutAr={about&&about[0]?.about_description_ar} loading={loading}/>
    <AboutLeft title='التاسيس ' aboutAr={about&&about[0]?.building_description_ar} loading={loading}/>
    <AboutRight title='سياسة الجودة' head='' head2={about&&about[0]?.quality_header_ar}  description2={about&&about[0]?.quality_description2_ar}  
    aboutAr={about&&about[0]?.quality_description1_ar} loading={loading}/>
    <div className='m-right medals'>
    <Medals title='الشهادة والاوسمة'   head={about&&about[0]?.certifications_short_description_ar} aboutAr={about&&about[0]?.certifications_ar} description2='' loading={loading}/>
    {/* <AboutLeft head={about&&about[0]?.certifications_short_description_ar} aboutAr={about&&about[0]?.certifications_ar} description2='' loading={loading}/> */}
    </div>
    <div className='ma-right aboutleft'>
    <AboutRight title='تلبية السوق المحلية والخارجية' head='' description2='' aboutAr={about&&about[0]?.market_description_ar} loading={loading}/>
    </div>

    <div className='m-right aboutleft mb-5 pb-3'>

    <AboutLeft title=' خطوط التوسع والخطط المستقبلية' description2='' aboutAr={about&&about[0]?.expanding_description_ar} loading={loading}/>
</div>
</div>
    </section>
  )
}

export default AboutMain