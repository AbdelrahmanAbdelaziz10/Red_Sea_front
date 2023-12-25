import React from 'react'
import './title.css';

const Title = ({title,pragraph}) => {
  return (
    <div className="map_text mt-4 ">
    <h4>{title}</h4>
      <div className="triangle_control">
        <div className="triangle" />
      </div>
      <p>{pragraph}</p>
    </div> 
     )
}

export default Title