import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import about from '@/imgs/aboutme.gif'
import coding from '@/imgs/coding.gif'
// import coding from './Imgs/Codingworkshop.mp4'


const About = () => {
 
  return (
    <section className='container' id='about'>
      <h1>ABOUT</h1>
    <div className='row'>
        <div className='col-md-6'>
        <Image
     
      src={about}
      alt="Picture of the author"
      style={{height:"550px",width:"100%"}}

    />
        {/* <video className='videobox' loop width="100%" height="550px" autoPlay muted >
          <source src='../public/aboutMe.mp4' type="video/mp4"/>
          Your browser does not support the video tag.
        </video> */}
        </div>
        <div className='col-md-6'>
        {/* <video className='videobox' width="100%"  height="550px" autoPlay muted >
          <source src='../public/Codingworkshop.mp4' type="video/mp4"/>
        </video> */}
        <Image
     
     src={coding}
     alt="Picture of the author"
     style={{height:"550px",width:"100%"}}
   />
        </div>
    </div>
     
    </section>
  )
}

export default About