import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' //For stlying later
import upShop from '../assets/UpShop.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={upShop} alt="UpShop Logo" className="navbar__logo" />
      </div>
        <div className="navbar__right">
           <Link to="/signup">Sign Up</Link>
           <Link to="/signin">Sign In</Link>
           <Link to="/cart">Cart</Link>
        </div>
    </nav>
  )
}
