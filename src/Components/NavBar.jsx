import React, { useState } from 'react'
import './NavBar.css'

export default function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container abel-regular">

      <nav className="navbar">

        <h2>R.A.Jayasinghe Optical</h2>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About-us</a></li>
            <button className="signin-btn mobile-btn">Sign-in</button>
        </ul>

        <button className="signin-btn desktop-btn">Sign-in</button>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

      </nav>

    </div>
  )
}