import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../Components/Footer/Footer';
import { Map } from '../../Components/Map/Map';
import Head from '../../Components/Head/Head';
import contactPoster from '../../images/صور-الشركة2.jpg'
import Product from '../../Components/ProductsComponent/Product/Product';
import { ContacMain } from './Contact Main/ContacMain';


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