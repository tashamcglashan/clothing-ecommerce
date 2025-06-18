import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ cartItems = [] }) {
  console.log("✅ Navbar is rendering");

  const itemCount = cartItems.length;
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <nav style={{ padding: '1rem', background: '#eee', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/">UpShop</Link>
      </div>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div>
        <Link to="/signup">Sign Up</Link> |{' '}
        <Link to="/signin">Sign In</Link> |{' '}
        <Link to="/cart">Cart ({itemCount})</Link>
      </div>
    </nav>
  );
}
