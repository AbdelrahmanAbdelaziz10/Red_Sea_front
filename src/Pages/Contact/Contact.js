import { ContacMain } from './Contact Main/ContacMain';
import { Container } from 'react-bootstrap'
import Footer from '../../Components/Footer/Footer';
import Head from '../../Components/Head/Head';
import { Map } from '../../Components/Map/Map';
import React from 'react'
import contactPoster from '../../images/company2.jpg'
import { useTranslation } from 'react-i18next';
const Conact = () => {

  const { t, i18n } = useTranslation();

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