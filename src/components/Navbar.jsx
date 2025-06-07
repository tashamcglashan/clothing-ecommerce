import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; // adjust path if needed
import './Navbar.css';
import upShop from '../assets/UpShop.png';

export default function Navbar({ cartItems, user }) {
  const navigate = useNavigate();
  const itemCount = cartItems?.length || 0;

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

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
        {user && (
          <button onClick={handleLogout} className="logout-btn">
            Log Out
          </button>
        )}
        <Link to="/cart" className="cart-link">
          Cart
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
