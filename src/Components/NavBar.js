import React from 'react'
import './NavBar.css'

export default function NavBar() {
  return (
    <div class="container">
        {/* navigation bar */}
      <nav class="navbar">
        <h2>R.A.Jayasinghe Optical</h2>
        <ul class='nav-links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">About-us</a></li>
        </ul>
        <button class="signin-btn">Sign-in</button>
      </nav>

    </div>
  )
}










