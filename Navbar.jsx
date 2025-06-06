import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' //For stlying later
import upShop from '../assets/UpShop.png'

export default function Navbar({cartItems}) {
  const itemCount = cartItems?.length || 0;
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">
        <img src={upShop} alt="UpShop Logo" className="navbar__logo" />
        </Link>
      </div>
        <div className="navbar__right">
           <Link to="/signup">Sign Up</Link>
           <Link to="/signin">Sign In</Link>
           <Link to="/cart" className="cart-link">
  Cart
  {itemCount > 0 && (
    <span className="cart-badge">{itemCount}</span>
  )}
</Link>

        </div>
    </nav>
  )
}
