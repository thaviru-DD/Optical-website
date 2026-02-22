import React from 'react'
import NavBar from '../Components/NavBar'
import './Home.css'

export default function Home() {
  return (
    <div>
      {/* add navbar component */}
      <NavBar/>

      {/* hero section */}
      <div className="hero">

        <img src="/images/expressive-young-woman-posing.jpg" className='hero-img' alt=""/>

        <div className="hero-container">
          <h1 className='hero-title'>Discover Your Style</h1>
          <div className="buttons">
            <button className='shopNow-btn'>Shop Now</button>
            <button className='contact-btn'>Contact</button>
          </div>
        </div>

      </div>

    </div>
  )
}
