import React, { useState } from 'react'
import smile from "@/imgs/smile.png"
import guvi from "@/imgs/guvi.png"
import Image from 'next/image'
const Experience = () => {
  const [hover,setHover]=useState(false)
  return (
    <section className='container' id='experience'>
      <h1>EXPERIENCE</h1>
      <div className='expCard expItems'>
      <div className="blob"></div>
      <Image
     
     src={guvi} 
     alt="logo"
     className='guviLOgo'

   />
      
        <div className='expItems'>
        <div className='image-Section'>
        <Image className='smilePic' src={smile} alt="smile"  style={{width:"100%"}} />
          
        </div>
        <div className='content-Section'>
          {/* <p><h5><em>N. Sunny</em></h5></p> */}
          <em>N. Sunny</em>
          <p>Intern</p>
          <div className='expContent'>
            <span>Technical Co-ordinator Intern</span><br/>
            <span>November,2022 - Ongoing</span><br/>
              <span><b>Roles & Responsibilities</b></span>
              <ul>
              <li className='experience-content' >I started this internship in the month of November 2022.</li>
              <li className='experience-content'>I have resolved over 2000+ queries.</li>
              <li className='experience-content'> My job is to clear all the errors and  doubts of all the Zen class Students.</li>
              <li className='experience-content'>I have learnt a lot of new implementation and techniques in this internship.</li>
              </ul>
  
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;