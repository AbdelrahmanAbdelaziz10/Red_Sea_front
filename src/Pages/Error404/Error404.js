import React from 'react'
import Lottie from "lottie-react";
import errorAnimation from '../../animation/error 404.json';
import './error.css'
import { Link } from 'react-router-dom';
const Error404 = () => {
  return (
    <div className='d-flex justify-content-center align-content-center'>
<div className='animate mt-4'>
<Lottie animationData={errorAnimation} />
<Link to='/' type="button" class="error">Back to home</Link>

</div>

    </div>
  )
}

export default Error404