import './Head.css';

import { IoIosArrowBack } from "react-icons/io";
import { NavBar } from "../NavBar/NavBar";
import React from "react";
import { useTranslation } from 'react-i18next';

const Head = ({title,poster,navshow}) => {
  const { t, i18n } = useTranslation();

  return (
    <header className="head ">
    <NavBar navshow={navshow}/>
    <div className=" d-flex justify-content-center">
    <div className="head_img mbcontent-5" style={{backgroundImage:`url('${poster}')`}}>
      <div className="header_hover" />
      </div>
      <div className="head_text d-flex justify-content-center" >
        <p>{t('home')} <IoIosArrowBack /> {title}</p>
      </div>
    </div>


    </header>
  );
};

export default Head;
