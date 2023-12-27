import React from 'react'
import './aboutmain.css'
import AboutRight from '../../../Components/AboutComponent/AboutRight';
import AboutLeft from '../../../Components/AboutComponent/AboutLeft';

const head1 ='ثلاثة عقود من الثقة';
const paragraph1="تبرز شركة البحر األحمر للمنظفات كشركة عمالقة في مجال تصنیع مساحیق التنظیف بعد أن فرضت نفسھا بقوة .... وھي بمسیرتھا       الناجحة منذو تأسیسھا في العام 1984 م لم تكن بمنأى عن مواكبة التطورات فقد وسعت من طاقتھا اإلنتاجیة على مرحلتین وذلك       باستحداث الیتھا اإلنتاجیة لمواكبة التطورات و التوسعات في األسواق لتلبي اإلحتیاجات الداخلیة والخارجیة ویتم تعبئة المنتجات وفق<br/>        أحدث اآلالت العالمية المتخصصة في مجال التعبئة"
const AboutMain = () => {
  return (
    <section className="product_container">
    <AboutRight title='عن الشركة' paragraph={paragraph1} head1={head1}/>
    <AboutLeft title='التاسيس ' paragraph={paragraph1} head1={head1}/>
    <AboutRight title='عن الشركة' paragraph={paragraph1} head1={head1}/>
    <div className='m-small'>
    <AboutLeft title='الشهادة والاوسمة' paragraph={paragraph1} head1={head1}/>
    </div>
    <div className='ma-right'>
    <AboutRight title='تلبية السوق المحلية والخارجية' paragraph={paragraph1} head1={head1}/>
    <AboutLeft title=' خطوط التوسع والخطط المستقبلية' paragraph={paragraph1} head1={head1}/>

    </div>

    </section>
  )
}

export default AboutMain