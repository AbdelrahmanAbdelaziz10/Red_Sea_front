import { ContacMain } from './Contact Main/ContacMain';
import { Container } from 'react-bootstrap'
import Footer from '../../Components/Footer/Footer';
import Head from '../../Components/Head/Head';
import { Map } from '../../Components/Map/Map';
import Product from '../../Components/ProductsComponent/Product/Product';
import React from 'react'
import contactPoster from '../../images/company2.jpg'

const Conact = () => {
  return (
    <div className='Contact'>
    <Head title='تواصل معنا' poster={contactPoster}/>
    <section className='contact_container'>
    <Container>
      <ContacMain />
      </Container>
    </section>

        <Map />
    <div className='triangle_control'>
    <div className="triangle"/>
    </div>
        <Footer />
    </div>
  )
}

export default Conact