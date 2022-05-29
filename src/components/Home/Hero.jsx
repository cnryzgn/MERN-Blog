import React, { useState, useEffect } from 'react'

const Hero = () => {
  
  useEffect(() => {
    console.log(window.innerWidth + "px")
  })

  return (
    <div className='main'>
        <img src={'bg_img.jpg'} alt="bg_img.jpg" id='heroImage'/>
        <div className="main-title">
            <h1 id="wideTitle">Welcome to My Blog</h1>
        </div>
    </div>
  )
}

export default Hero