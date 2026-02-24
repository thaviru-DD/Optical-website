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

      {/* about us section */}

      <div className="about-us">
        <div className="about-us-container">
          <h1>About</h1>
          <h1>R. A. Jayasinghe Opticians</h1>
          <div className="underline"/>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="video">
          <video src="/videos/Cinematic Ad film of Sunglasses _ Product Shoot _ Commercial Ads _ Best Ads.mp4" className="sunglass-video" controls/>
        </div>
      </div>

      




    </div>
  )
}
