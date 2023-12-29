import React from 'react';
import './ProductCad.css';


const ProductCard = ({title,imageSrc,index}) => {
  return (<div className='d-flex justify-content-center flex_col'>
    <div className="card d-flex flex-column mb-2 mt-4" key={index}>
    <div className='card_text d-flex mt-3'>
    <div className='arrow d-flex align-items-center me-1'>
    <div className="triangle triangle1 me-4 mt-1"/>
    <div className="triangle triangle2 me-2"/>

    </div>
    <h6 className='me-5 pe-4 pt-2'>{title}</h6>
    </div>
    <div className="img ">
      <img alt={title} src={imageSrc} />
    </div>
    <button className="product_btn">اعرف أكثر</button>
  </div>
  <p className='product_description'>عن الشركة عن الشركة عن الشركة عن الشركة عن الشركة عن الشركة عن الشركة </p>
  
  </div>
)
}

export default ProductCard