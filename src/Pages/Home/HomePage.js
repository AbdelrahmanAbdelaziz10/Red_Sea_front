import { ContextLang } from "../../App";
import About from "../../Components/About/About";
import Brand from "../../Components/Brand/Brand";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LocationMap from "../../Components/MapLocation/LocationMap";
import Products from "../../Components/Products/Products";
import React, { useContext, useEffect } from "react";
import { useTranslation } from 'react-i18next';
const HomePage = ({navshow}) => {
  const { selectedLanguage } = useContext(ContextLang);
  const { t, i18n } = useTranslation();

  useEffect(()=>{
    document.title= `${t('page_title')} ${t('home')}`;
  },[selectedLanguage])
  return (
    <div className="Home">
      <Header navshow={navshow} />
      <About />
      <div className="homepage_product ">
        <Products title={t('product')} selectedLanguage={selectedLanguage}/>
      </div>
      <Brand />
      <LocationMap title={t('map')} />
      <div className="triangle_control footer">
              <div className="triangle" />
            </div>
            <Footer />
    </div>
  );
};

export default HomePage;
