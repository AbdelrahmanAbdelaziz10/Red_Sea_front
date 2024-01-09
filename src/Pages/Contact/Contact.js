import { ContacMain } from './Contact Main/ContacMain';
import { Container } from 'react-bootstrap'
import Head from '../../Components/Head/Head';
import { Map } from '../../Components/Map/Map';
import React, { useContext, useEffect } from 'react'
import contactPoster from '../../images/company2.jpg'
import { useTranslation } from 'react-i18next';
import { ContextLang } from '../../App';
const Conact = () => {
  const { selectedLanguage } = useContext(ContextLang);
  const { t, i18n } = useTranslation();
  useEffect(()=>{
    document.title=`${t('page_title')}${t('contact')}`;
  },[selectedLanguage])

  return (
    <div className='Contact'>
    <Head title={t('contact')} poster={contactPoster}/>
    <section className='contact_container'>
    <Container>
      <ContacMain />
      </Container>
    </section>

        <Map />
    {/* <div className='triangle_control'>
    <div className="triangle"/>
    </div>
        <Footer /> */}
    </div>
  )
}

export default Conact