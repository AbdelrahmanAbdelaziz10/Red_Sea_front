import React from 'react'
import './title.css';

const Title = ({title,pragraph}) => {
  return (
    <div className="map_text mt-4 ">
        <div className="triangle_control ">
        <div className="triangle" />
      </div>
    <h4>{title}
    </h4>

      <p>{pragraph}</p>
    </div> 
     )
}

export default Title