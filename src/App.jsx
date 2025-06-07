import ProductDetail from './pages/ProductDetail.jsx';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import Cart from './pages/Cart.jsx';
import Home from './pages/Home.jsx';
import { useState, useEffect } from 'react'; // ✅ include useEffect
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js'; // ✅ your firebase config
import viteLogo from '/vite.svg';

import './App.css';

function App() {
  // 1. Track signed-in user
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // cleanup listener
  }, []);

  // 2. Cart state
  const [cartItems, setCartItems] = useState([]);

  // 3. Add to cart only if signed in
  const addToCart = (item) => {
    if (!user) {
      alert("Please sign in to add items to your cart.");
      return;
    }
    setCartItems([...cartItems, item]);
  };

  // 4. Remove item from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // 5. Return the JSX
  return (
    <>
      <Navbar cartItems={cartItems} user={user} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} user={user} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} user={user} />} />
      </Routes>
    </>
  );
}


export default App;
