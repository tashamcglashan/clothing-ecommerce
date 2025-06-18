import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; // adjust path if needed
import './Navbar.css';
import upShop from '../assets/UpShop.png';

export default function Navbar({ cartItems, user }) {
  const navigate = useNavigate();
  const itemCount = cartItems?.length || 0;
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

   const handleSearch = (e) => {
    e.preventDefault(); //prevent page reload
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img src={upShop} alt="UpShop Logo" className="navbar__logo" />
        </Link>
      </div>

      {/* ✅ Search bar */}
      <form onSubmit={handleSearch} className="navbar__search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">Search</button>
      </form>

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
